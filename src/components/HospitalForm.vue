<template>
	<form class="form" @submit.prevent="onSubmit">
		<label>
			<span>등록 연도</span>
			<select v-model="selectedYear" required>
				<option value="">연도를 선택하세요</option>
				<option value="2024">2024년</option>
				<option value="2025">2025년</option>
			</select>
		</label>
		<label>
			<span>병원 주소 검색</span>
			<input 
				v-model.trim="addressSearch" 
				@input="searchAddress"
				placeholder="주소를 입력하세요 (예: 서울특별시 강남구)"
			/>
		</label>
		<label>
			<span>병원 이름</span>
			<input v-model.trim="name" required placeholder="예) 행복병원" />
		</label>
		<!-- 주소 검색 결과 -->
		<div v-if="addressResults.length > 0" class="address-results">
			<div 
				v-for="(result, index) in addressResults" 
				:key="index"
				class="address-item"
				@click="selectAddress(result)"
			>
				<div class="address-main">{{ result.place_name }}</div>
				<div class="address-detail">{{ result.address_name }}</div>
			</div>
		</div>
		<label>
			<span>병원 주소</span>
			<input v-model.trim="address" required placeholder="주소를 검색하여 선택하세요" readonly />
		</label>
		<label>
			<span>모집인원 수</span>
			<input v-model.number="recruitmentCount" type="number" min="0" required />
		</label>
		<button :disabled="submitting">{{ submitting ? '등록 중…' : '등록' }}</button>
		<p v-if="error" class="error">{{ error }}</p>
	</form>
</template>

<script setup>
import { ref } from 'vue'
import { loadKakao } from '../composables/useKakaoLoader.js'

const emit = defineEmits(['added'])

const selectedYear = ref('')
const name = ref('')
const address = ref('')
const addressSearch = ref('')
const addressResults = ref([])
const recruitmentCount = ref(0)
const submitting = ref(false)
const error = ref('')

// 주소 검색 함수
async function searchAddress() {
	if (addressSearch.value.length < 2) {
		addressResults.value = []
		return
	}
	
	try {
		const { kakao } = await loadKakao()
		const places = new kakao.maps.services.Places()
		
		places.keywordSearch(addressSearch.value, (data, status) => {
			if (status === kakao.maps.services.Status.OK) {
				// 병원 관련 장소만 필터링
				const hospitalResults = data.filter(place => 
					place.category_name.includes('의료') || 
					place.place_name.includes('병원') ||
					place.place_name.includes('의원') ||
					place.place_name.includes('클리닉')
				)
				addressResults.value = hospitalResults.slice(0, 5) // 최대 5개 결과
			} else {
				addressResults.value = []
			}
		})
	} catch (e) {
		console.error('주소 검색 오류:', e)
		addressResults.value = []
	}
}

// 주소 선택 함수
function selectAddress(result) {
	name.value = result.place_name
	address.value = result.address_name
	addressSearch.value = ''
	addressResults.value = []
}

async function onSubmit() {
	if (!selectedYear.value || !name.value || !address.value || recruitmentCount.value == null) return
	
	try {
		submitting.value = true
		error.value = ''
		
		const { kakao } = await loadKakao()
		const geocoder = new kakao.maps.services.Geocoder()
		
		geocoder.addressSearch(address.value, (result, status) => {
			if (status === kakao.maps.services.Status.OK && result && result.length > 0) {
				const { y, x } = result[0] // y: lat, x: lng
				
				emit('added', {
					id: `${Date.now()}`,
					YEAR: selectedYear.value,
					HOSPITAL_NM: name.value,
					ADDR: address.value,
					NUM: recruitmentCount.value ?? 0,
					lat: parseFloat(y),
					lng: parseFloat(x),
				})
				
				// 폼 초기화
				selectedYear.value = ''
				name.value = ''
				address.value = ''
				addressSearch.value = ''
				recruitmentCount.value = 0
			} else {
				error.value = '주소를 찾을 수 없습니다.'
			}
			submitting.value = false
		})
	} catch (e) {
		error.value = e?.message || '등록 중 오류가 발생했습니다.'
		submitting.value = false
	}
}
</script>

<style scoped>
.form {
	display: grid;
	gap: 10px;
}
label span {
	display: block;
	font-size: 12px;
	color: #444;
	margin-bottom: 4px;
}
input, select {
	width: 100%;
	box-sizing: border-box;
	padding: 8px 10px;
	border: 1px solid #ccc;
	border-radius: 6px;
}
button {
	padding: 10px 12px;
	background: #3b82f6;
	color: #fff;
	border: none;
	border-radius: 6px;
	cursor: pointer;
}
button:disabled {
	opacity: 0.6;
	cursor: not-allowed;
}
.error {
	color: #b00020;
	margin: 4px 0 0;
}

.address-results {
	background: white;
	border: 1px solid #ccc;
	border-radius: 6px;
	max-height: 200px;
	overflow-y: auto;
	box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.address-item {
	padding: 12px;
	border-bottom: 1px solid #eee;
	cursor: pointer;
	transition: background-color 0.2s ease;
}

.address-item:hover {
	background-color: #f5f5f5;
}

.address-item:last-child {
	border-bottom: none;
}

.address-main {
	font-weight: 500;
	color: #333;
	margin-bottom: 4px;
}

.address-detail {
	font-size: 12px;
	color: #666;
}
</style>

