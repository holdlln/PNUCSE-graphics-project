# HOBIN JANG Portfolio

정적 HTML/CSS로 만든 포트폴리오입니다.

- `dist/index.html`: 이름, 소속, 출신만 보여주는 인트로
- `dist/my.html`: 프로필 사진, 세부 정보 및 외부 링크
- `dist/works.html`: 네 프로젝트를 보여주는 반응형 작업 갤러리
- `dist/work-morb.html`: MORB 프로젝트 상세 페이지
- `dist/work-bookus.html`: BookUs 프로젝트 상세 페이지
- `dist/work-joseon.html`: 조선기담 프로젝트 상세 페이지
- `dist/work-school-risk.html`: 부산 통학로 위험도 분석 상세 페이지
- `dist/off-hours.html`: Spotify 플레이리스트와 사진 갤러리 자리
- `dist/style.css`: 로컬 Pretendard 기반 공통 스타일과 반응형 레이아웃
- `dist/assets/works`: 프로젝트별 최적화 이미지와 열람용 PDF 보고서
- `dist/assets/gallery`: OFF HOURS용으로 선별·최적화한 WebP 사진

`dist/index.html`을 직접 열거나 프로젝트 루트에서 아래 명령을 실행합니다.

```text
python -m http.server 4173 --directory dist
```

작품을 추가할 때는 `works.html`의 `.work-item`을 복사하면 자동으로 다음 그리드 칸에 배치됩니다. 상세 페이지는 기존 `work-*.html`의 구조를 복사하고 프로젝트별 이미지와 내용을 교체하면 됩니다.

프로필과 갤러리 사진은 웹용 WebP로 최적화되어 있으며, Spotify 임베드는 본문을 먼저 표시한 다음 브라우저 유휴 시간에 불러옵니다.

구매 도메인: `imhobin.site` (호스팅 연결은 별도 설정)
