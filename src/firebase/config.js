// Firebase 설정
import { initializeApp } from 'firebase/app'
//import { getDatabase } from 'firebase/database'
import { getFirestore } from 'firebase/firestore';

// Firebase 프로젝트 설정
// Firebase 콘솔에서 프로젝트 설정 > 일반 > 웹 앱에서 복사한 설정을 여기에 입력하세요
const firebaseConfig = {
  apiKey: "AIzaSyBBG7ZK4k0dcqKaVRn2AXRrHDfhBj4am8k",
  authDomain: "hospitalsite-4da7c.firebaseapp.com",
  projectId: "hospitalsite-4da7c",
  storageBucket: "hospitalsite-4da7c.firebasestorage.app",
  messagingSenderId: "720953153589",
  appId: "1:720953153589:web:1d8cf2c23cf689b8b4797c",
  measurementId: "G-LJ2NWGVCYQ"
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig)

// Realtime Database 인스턴스 생성
//export const database = getDatabase(app)
export const db = getFirestore(app)
export default app
