# 카카오 지도 API 설정 가이드

## 1. 카카오 개발자 계정 생성 및 앱 등록

1. [카카오 개발자 사이트](https://developers.kakao.com/)에 접속
2. 카카오 계정으로 로그인
3. "내 애플리케이션" 메뉴에서 "애플리케이션 추가하기" 클릭
4. 앱 이름, 사업자명 입력 후 생성

## 2. JavaScript 키 확인

1. 생성된 앱을 클릭하여 상세 페이지로 이동
2. "앱 키" 탭에서 "JavaScript 키" 복사

## 3. 프로젝트에 키 설정

`src/composables/useKakaoLoader.js` 파일을 열고 다음 부분을 수정하세요:

```javascript
// 카카오 지도 API 키 설정
const KAKAO_API_KEY = 'YOUR_KAKAO_JAVASCRIPT_KEY_HERE' // 여기에 실제 JavaScript 키를 입력하세요
```

위의 `YOUR_KAKAO_JAVASCRIPT_KEY_HERE` 부분을 복사한 JavaScript 키로 교체하세요.

예시:
```javascript
const KAKAO_API_KEY = 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6'
```

## 4. 플랫폼 설정 (중요!)

1. 카카오 개발자 콘솔에서 "플랫폼" 탭으로 이동
2. "Web 플랫폼 등록" 클릭
3. 사이트 도메인을 등록:
   - 개발 환경: `http://localhost:5173`, `http://localhost:5174` 등
   - 운영 환경: 실제 도메인 (예: `https://yourdomain.com`)

## 5. 웹 서비스 URL 설정

1. "Web 플랫폼" 설정에서 "사이트 도메인" 추가
2. 개발 시에는 `http://localhost:5173` 또는 `http://localhost:5174` 등 사용 중인 포트 추가

## 주의사항

- JavaScript 키는 클라이언트 사이드에서 사용되므로 보안에 주의하세요
- 도메인 제한을 통해 무단 사용을 방지할 수 있습니다
- 개발과 운영 환경의 도메인을 모두 등록해야 합니다

## 문제 해결

### "카카오 지도를 불러올 수 없습니다" 오류가 발생하는 경우:

1. JavaScript 키가 올바르게 설정되었는지 확인
2. 플랫폼 설정에서 현재 도메인이 등록되었는지 확인
3. 브라우저 개발자 도구의 콘솔에서 오류 메시지 확인
4. 카카오 개발자 콘솔에서 앱 상태가 "운영"인지 확인
