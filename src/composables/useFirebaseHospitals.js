import { ref, onMounted, onUnmounted } from 'vue'
import { database } from '../firebase/config.js'
import { 
  ref as dbRef, 
  push, 
  onValue, 
  off,
  set,
  remove
} from 'firebase/database'

export function useFirebaseHospitals() {
  const hospitals = ref([])
  const loading = ref(false)
  const error = ref(null)
  const selectedYear = ref('2024') // 기본값 2024년

  // Firebase Realtime Database 참조
  const hospitalsRef = dbRef(database, 'hospitals')

  // 실시간 데이터베이스 리스너 설정
  function setupRealtimeListener() {
    onValue(hospitalsRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        // 모든 연도의 데이터를 합쳐서 배열로 변환
        const allHospitals = []
        Object.entries(data).forEach(([year, yearData]) => {
          if (yearData) {
            Object.entries(yearData).forEach(([id, hospital]) => {
              allHospitals.push({
                id,
                YEAR: year,
                ...hospital
              })
            })
          }
        })
        hospitals.value = allHospitals
      } else {
        hospitals.value = []
      }
      loading.value = false
    }, (error) => {
      console.error('Firebase 데이터 읽기 오류:', error)
      error.value = '데이터를 불러오는 중 오류가 발생했습니다.'
      loading.value = false
    })
  }

  // 병원 추가
  async function addHospital(hospitalData) {
    try {
      loading.value = true
      error.value = null
      
      const { YEAR, ...hospitalInfo } = hospitalData
      const yearRef = dbRef(database, `hospitals/${YEAR}`)
      
      // 해당 연도에 데이터 추가
      const newHospitalRef = push(yearRef, hospitalInfo)
      
      // 추가된 데이터의 ID를 반환
      return newHospitalRef.key
    } catch (err) {
      console.error('병원 추가 오류:', err)
      error.value = '병원을 추가하는 중 오류가 발생했습니다.'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 병원 업데이트
  async function updateHospital(hospitalId, YEAR, hospitalData) {
    try {
      loading.value = true
      error.value = null
      
      const hospitalRef = dbRef(database, `hospitals/${YEAR}/${hospitalId}`)
      await set(hospitalRef, hospitalData)
    } catch (err) {
      console.error('병원 업데이트 오류:', err)
      error.value = '병원을 업데이트하는 중 오류가 발생했습니다.'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 병원 삭제
  async function deleteHospital(hospitalId, YEAR) {
    try {
      loading.value = true
      error.value = null
      
      const hospitalRef = dbRef(database, `hospitals/${YEAR}/${hospitalId}`)
      await remove(hospitalRef)
    } catch (err) {
      console.error('병원 삭제 오류:', err)
      error.value = '병원을 삭제하는 중 오류가 발생했습니다.'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 컴포넌트 마운트 시 리스너 설정
  onMounted(() => {
    setupRealtimeListener()
  })

  // 컴포넌트 언마운트 시 리스너 정리
  onUnmounted(() => {
    off(hospitalsRef)
  })

  return {
    hospitals,
    loading,
    error,
    selectedYear,
    addHospital,
    updateHospital,
    deleteHospital
  }
}
