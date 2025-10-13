## 병원 지원 지도 (Vue 3 + Vite + Kakao 지도 API)

병원 이름, 주소, 지원자 수를 등록하고 카카오 지도에 마커로 표시하는 단일 페이지입니다. Vue 3 Composition API와 Vite를 사용합니다.

### 준비물
- Node.js 18+
- Kakao Developers JavaScript 앱 키

### 설치
1) 의존성 설치
```bash
npm install
```

2) 환경 변수 설정
프로젝트 루트에 `.env` 파일을 생성하고 아래 내용을 입력하세요.
```bash
VITE_KAKAO_APP_KEY=여기에_카카오_JAVASCRIPT_APP_KEY
```

3) 개발 서버 실행
```bash
npm run dev
```

### 주요 기능
- 병원 등록: 이름, 주소, 지원자 수 입력 → 주소 지오코딩 후 저장
- 지도 표시: 저장된 병원을 카카오 지도 마커로 표시, 인포윈도우 제공
- 로컬 저장: `localStorage`로 데이터 영구 저장

### 폴더 구조
```
.
├─ index.html
├─ package.json
├─ vite.config.ts
├─ src
│  ├─ main.ts
│  ├─ App.vue
│  ├─ components
│  │  ├─ HospitalForm.vue
│  │  └─ KakaoMap.vue
│  └─ composables
│     ├─ useHospitals.ts
│     └─ useKakaoLoader.ts
└─ .env (로컬에서 생성)
```

### 배포
```bash
npm run build
npm run preview
```

### 주의사항
- 카카오 지도 SDK는 동적으로 로드됩니다. `VITE_KAKAO_APP_KEY`가 없으면 지도 기능이 동작하지 않습니다.
