# Firebase Database 설정 가이드

## 1. Firebase 프로젝트 생성

1. [Firebase 콘솔](https://console.firebase.google.com/)에 접속
2. "프로젝트 추가" 클릭
3. 프로젝트 이름 입력 (예: hospital-support-map)
4. Google Analytics 설정 (선택사항)
5. 프로젝트 생성 완료

## 2. Realtime Database 활성화

1. Firebase 콘솔에서 생성한 프로젝트 선택
2. 왼쪽 메뉴에서 "Realtime Database" 클릭
3. "데이터베이스 만들기" 클릭
4. 보안 규칙 설정:
   - **테스트 모드**: 개발 중에는 "테스트 모드에서 시작" 선택
   - **운영 모드**: 나중에 보안 규칙을 설정해야 함
5. 위치 선택 (asia-northeast3 - 서울 권장)

## 3. 웹 앱 등록

1. Firebase 콘솔에서 프로젝트 설정 (⚙️) 클릭
2. "일반" 탭에서 "내 앱" 섹션으로 스크롤
3. 웹 아이콘 (</>) 클릭
4. 앱 닉네임 입력 (예: hospital-web-app)
5. "Firebase Hosting 설정" 체크 해제 (선택사항)
6. "앱 등록" 클릭

## 4. Firebase 설정 정보 복사

앱 등록 후 나타나는 Firebase 설정 정보를 복사합니다:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef..."
}
```

## 5. 프로젝트에 설정 적용

`src/firebase/config.js` 파일을 열고 위에서 복사한 설정 정보로 교체하세요:

```javascript
const firebaseConfig = {
  apiKey: "여기에_실제_API_키_입력",
  authDomain: "여기에_실제_도메인_입력",
  databaseURL: "여기에_실제_데이터베이스_URL_입력",
  projectId: "여기에_실제_프로젝트_ID_입력",
  storageBucket: "여기에_실제_스토리지_버킷_입력",
  messagingSenderId: "여기에_실제_발신자_ID_입력",
  appId: "여기에_실제_앱_ID_입력"
}
```

## 6. 보안 규칙 설정 (중요!)

Firebase 콘솔에서 "Realtime Database" > "규칙" 탭으로 이동하여 보안 규칙을 설정하세요.

### 개발용 (모든 접근 허용)
```json
{
  "rules": {
    ".read": true,
    ".write": true
  }
}
```

### 운영용 (권장)
```json
{
  "rules": {
    "hospitals": {
      ".read": true,
      ".write": true
    }
  }
}
```

## 7. 데이터베이스 구조

Firebase Realtime Database는 다음과 같은 구조로 데이터를 저장합니다:

```
hospitals/
  ├── -N1234567890/
  │   ├── name: "행복병원"
  │   ├── address: "서울특별시 강남구..."
  │   ├── applicantCount: 15
  │   ├── lat: 37.5665
  │   └── lng: 126.9780
  └── -N1234567891/
      ├── name: "사랑병원"
      ├── address: "서울특별시 서초구..."
      ├── applicantCount: 8
      ├── lat: 37.4945
      └── lng: 127.0276
```

## 8. 테스트

1. 개발 서버 실행: `npm run dev`
2. 브라우저에서 애플리케이션 접속
3. 병원 정보 입력 후 등록
4. Firebase 콘솔에서 "Realtime Database" > "데이터" 탭에서 데이터 확인

## 문제 해결

### "Firebase 앱이 초기화되지 않았습니다" 오류
- Firebase 설정 정보가 올바르게 입력되었는지 확인
- 프로젝트 ID가 정확한지 확인

### "권한이 거부되었습니다" 오류
- Firebase 보안 규칙이 올바르게 설정되었는지 확인
- 데이터베이스 URL이 정확한지 확인

### 데이터가 저장되지 않는 경우
- 브라우저 개발자 도구의 콘솔에서 오류 메시지 확인
- Firebase 콘솔에서 데이터베이스 상태 확인
- 네트워크 연결 상태 확인

## 보안 고려사항

- **개발 환경**: 테스트 모드 사용 가능
- **운영 환경**: 반드시 보안 규칙 설정 필요
- **API 키**: 클라이언트 사이드에 노출되므로 도메인 제한 설정 권장
- **데이터 검증**: 클라이언트 사이드와 서버 사이드 모두에서 데이터 검증 필요





