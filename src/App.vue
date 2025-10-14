<template>
	<div class="container">
		<h1>병원 지원 지도</h1>
		
		<!-- 에러 메시지 표시 -->
		<div v-if="error" class="error-message">
			{{ error }}
		</div>
		
		<!-- 로딩 상태 표시 -->
		<div v-if="loading" class="loading-message">
			데이터를 불러오는 중...
		</div>
		
		<div class="layout">
			<section class="left">
				<h2>병원 등록</h2>
				<HospitalForm @added="handleAdded" />
				<!--<div class="list">
					<h3>등록된 병원 ({{ hospitals.length }}개)</h3>
					<ul>
						<li v-for="h in hospitals" :key="h.id">
							<strong>{{ h.HOSPITAL_NM }}</strong>
							<span> — {{ h.ADDR }}</span>
							<span> (모집인원: {{ h.NUM }}명)</span>
						</li>
					</ul>
				</div>
				-->
			</section>
			<section class="right">
				<HospitalMap 
					:hospitals="hospitals" 
					@deleteHospital="handleMapDeleteHospital"
				/>
			</section>
		</div>
	</div>
</template>

<script setup>
import HospitalForm from './components/HospitalForm.vue'
import HospitalMap from './components/HospitalMap.vue'
import { useFirebaseHospitals } from './composables/useFirebaseHospitals.js'

const { hospitals, addHospital, deleteHospital, loading, error } = useFirebaseHospitals()

async function handleAdded(h) {
	try {
		await addHospital(h)
		console.log('병원이 성공적으로 추가되었습니다.')
	} catch (err) {
		console.error('병원 추가 실패:', err)
	}
}


async function handleMapDeleteHospital(h) {
	try {
		await deleteHospital(h.id)
		console.log('병원이 성공적으로 삭제되었습니다.')
	} catch (err) {
		console.error('병원 삭제 실패:', err)
	}
}
</script>

<style scoped>
.container {
	max-width: 1200px;
	margin: 0 auto;
	padding: 16px;
}

.error-message {
	background: #fee;
	border: 1px solid #fcc;
	color: #c33;
	padding: 12px;
	border-radius: 6px;
	margin-bottom: 16px;
}

.loading-message {
	background: #e3f2fd;
	border: 1px solid #bbdefb;
	color: #1976d2;
	padding: 12px;
	border-radius: 6px;
	margin-bottom: 16px;
	text-align: center;
}

.layout {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 16px;
}
.left {
	background: #f7f7f9;
	border: 1px solid #e6e6ef;
	border-radius: 8px;
	padding: 12px;
	overflow: auto;
}
.right {
	min-height: 560px;
}
.list ul {
	padding-left: 16px;
}
.list li {
	margin: 6px 0;
}
@media (max-width: 900px) {
	.layout {
		grid-template-columns: 1fr;
	}
	.right {
		min-height: 420px;
	}
}
</style>

