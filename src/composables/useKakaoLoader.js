// 카카오 지도 API 키 설정
const KAKAO_API_KEY = 'cb053df10ee265cc352d6f92f4942439' // 여기에 실제 JavaScript 키를 입력하세요

let loadingPromise = null

export function loadKakao() {
	if (typeof window === 'undefined') {
		return Promise.reject(new Error('window is undefined'))
	}
	
	if (window.kakao && window.kakao.maps) {
		return Promise.resolve({ kakao: window.kakao })
	}
	
	if (loadingPromise) return loadingPromise

	if (!KAKAO_API_KEY || KAKAO_API_KEY === 'YOUR_KAKAO_JAVASCRIPT_KEY_HERE') {
		return Promise.reject(new Error('카카오 지도 JavaScript 키가 설정되지 않았습니다. src/composables/useKakaoLoader.js 파일에서 KAKAO_API_KEY를 설정해주세요.'))
	}

	loadingPromise = new Promise((resolve, reject) => {
		const script = document.createElement('script')
		const url = `https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=${KAKAO_API_KEY}&libraries=services`
		script.src = url
		script.async = true
		script.onload = () => {
			window.kakao.maps.load(() => resolve({ kakao: window.kakao }))
		}
		script.onerror = () => reject(new Error('카카오 지도 스크립트 로드 실패'))
		document.head.appendChild(script)
	})

	return loadingPromise
}

export async function geocodeAddress(address) {
	const { kakao } = await loadKakao()
	return new Promise((resolve) => {
		const geocoder = new kakao.maps.services.Geocoder()
		geocoder.addressSearch(address, (result, status) => {
			if (status === kakao.maps.services.Status.OK && result && result.length > 0) {
				const { y, x } = result[0] // y: lat, x: lng
				resolve({ lat: parseFloat(y), lng: parseFloat(x) })
			} else {
				resolve(null)
			}
		})
	})
}
