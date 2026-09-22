# PNUCSE Graphics Project — Portfolio
파랑 계열의 개인 포트폴리오 디자인 초안 02입니다.

## 실행
- dist/index.html을 브라우저로 열거나 프로젝트 루트에서 python -m http.server 4173 --directory dist 를 실행합니다.
- 실행 후 http://localhost:4173 에 접속합니다.
- 본문과 작품 소개는 정적 HTML입니다. 작품 상세보기에는 app.js를 사용합니다.
- Google Fonts와 Spotify는 인터넷 연결이 필요하며 글꼴 실패 시 시스템 대체 글꼴을 사용합니다.

## 파일
- dist/index.html: 첫 화면, MY, 작품 카드, GUITAR와 갤러리
- dist/style.css: 파랑 팔레트, 글꼴, 반응형, 애니메이션
- dist/app.js: 프로젝트 상세 데이터와 모달 동작
- DESIGN.md: 설계·수정 기록

## 작품 추가
1. index.html의 work-card article을 복사하고 data-project에 고유 ID를 넣습니다.
2. 카드 이름, 행사, 표지와 접근성 라벨을 바꿉니다.
3. app.js의 projects에 같은 ID로 title, event, description을 추가합니다.
4. 상단 WORKS 숫자와 SELECTED PROJECTS 수를 변경합니다.
공통 모달을 사용하므로 열기·닫기 코드를 작품마다 작성할 필요가 없습니다.

## 교체할 자료
이름, 프로필 사진, 이메일, GitHub·랩실 링크, 실제 프로젝트 이미지와 기여·문제 해결·결과, 개인 플레이리스트, 취미 갤러리.
Instagram·세론·언톡 링크는 공개 여부 결정 후 추가합니다. 업머니는 사용자 요청에 따라 보류했습니다.
현재 작품 표지는 타이포그래피 초안이며 실제 서비스 화면으로 표시하지 않았습니다.

