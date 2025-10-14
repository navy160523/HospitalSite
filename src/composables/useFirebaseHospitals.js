import { ref, onMounted, onUnmounted } from 'vue'
import { db } from '../firebase/config.js' // 'database' 대신 Firestore 'db' 인스턴스 import
import { 
  collection, 
  onSnapshot, 
  query, 
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  // where, // 필요한 경우 주석 해제하여 사용
  // getDocs // 필요한 경우 주석 해제하여 사용
} from 'firebase/firestore'

export function useFirebaseHospitals() {
  const hospitals = ref([])
  const loading = ref(false)
  const error = ref(null)
  const selectedYear = ref('2024') // 기본값 2024년

  // Firestore 컬렉션 참조
  // Firestore는 계층적 구조를 사용하므로, 모든 병원을 하나의 'hospitals' 컬렉션에 저장하고
  // 'YEAR' 필드를 사용하여 연도를 구분하는 방식을 채택합니다.
  const hospitalsCollectionRef = collection(db, 'hospitalData')

  // 실시간 데이터베이스 리스너 설정 (onSnapshot)
  let unsubscribe = null; // 리스너 해제 함수를 저장할 변수

  function setupRealtimeListener() {
    loading.value = true;

    // 모든 병원 데이터를 실시간으로 가져오는 쿼리
    const q = query(hospitalsCollectionRef); // 필요하다면 여기에 where() 조건을 추가할 수 있습니다.

    // onSnapshot을 사용하여 실시간 리스너 설정
    unsubscribe = onSnapshot(q, (snapshot) => {
      const allHospitals = []
      snapshot.forEach((doc) => {
        // Firestore 문서는 .data() 메서드로 데이터에 접근합니다.
        allHospitals.push({
          id: doc.id, // 문서 ID는 id 속성으로 별도 저장
          ...doc.data()
        })
      })
      hospitals.value = allHospitals
      loading.value = false
    }, (err) => {
      console.error('Firestore 데이터 읽기 오류:', err)
      error.value = '데이터를 불러오는 중 오류가 발생했습니다.'
      loading.value = false
    })
  }

  // 병원 추가
  async function addHospital(hospitalData) {
    try {
      loading.value = true
      error.value = null
      
      // Firestore의 addDoc 함수는 컬렉션 참조에 바로 데이터를 추가합니다.
      // YEAR는 데이터 필드로 포함됩니다.
      const newDocRef = await addDoc(hospitalsCollectionRef, hospitalData)
      
      // 추가된 데이터의 ID를 반환
      location.reload()
      return newDocRef.id
    } catch (err) {
      console.error('병원 추가 오류:', err)
      error.value = '병원을 추가하는 중 오류가 발생했습니다.'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 병원 업데이트
  async function updateHospital(hospitalId, hospitalData) {
    try {
      loading.value = true
      error.value = null
      
      // 특정 문서(Document) 참조를 가져옵니다.
      const hospitalDocRef = doc(db, 'hospitalData', hospitalId)
      
      // updateDoc을 사용하여 문서 업데이트 (병합)
      await updateDoc(hospitalDocRef, hospitalData)
    } catch (err) {
      console.error('병원 업데이트 오류:', err)
      error.value = '병원을 업데이트하는 중 오류가 발생했습니다.'
      throw err
    } finally {
      loading.value = false
    }
  }

  // 병원 삭제
  async function deleteHospital(hospitalId) {
    const hospitalDocRef =  doc(db, 'hospitalData', hospitalId);
    try {
      loading.value = true 
      error.value = null
      
      // 특정 문서(Document) 참조를 가져옵니다.
      
      // deleteDoc을 사용하여 문서 삭제
      await deleteDoc(hospitalDocRef)
      location.reload()
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
    // onSnapshot이 반환한 unsubscribe 함수를 호출하여 리스너 해제
    if (unsubscribe) {
      unsubscribe()
    }
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