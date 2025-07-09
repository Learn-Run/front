#  Learn-Run Frontend Project

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![Turborepo](https://img.shields.io/badge/Turborepo-1.12.0-blue?style=for-the-badge&logo=turborepo)

**모던 웹 기술 스택으로 구축된 학습 플랫폼 & 채팅 서비스**

</div>

---

##  프로젝트 개요

###  프로젝트 목표
- **학습 플랫폼 (Pick-Learn)**: 사용자들이 지식을 공유하고 학습할 수 있는 커뮤니티 플랫폼
- **채팅 서비스 (Chat-Service)**: 실시간 채팅 및 화상 통화 기능을 제공하는 메신저 애플리케이션

### 🛠️ 기술 스택
- **프레임워크**: Next.js 15.2.4 (App Router)
- **언어**: TypeScript 5.0
- **스타일링**: Tailwind CSS 4.0
- **UI 라이브러리**: Shadcn/ui
- **상태 관리**: React Context API
- **폼 관리**: React Hook Form + Zod
- **인증**: NextAuth.js
- **모노레포**: Turborepo
- **패키지 매니저**: pnpm

---

## 👥 개발팀 및 역할 분담

### 🎨 Frontend 개발팀
| 역할 | 담당 영역 | 주요 기술 |
|------|-----------|-----------|
| **팀장** | 전체 아키텍처 설계, 코드 리뷰 | Next.js, TypeScript, Turborepo |
| **UI/UX 개발자** | 디자인 시스템, 컴포넌트 라이브러리 | Shadcn/ui, Tailwind CSS |
| **학습 플랫폼 개발자** | Pick-Learn 애플리케이션 | React, Next.js, AWS S3 |
| **채팅 서비스 개발자** | Chat-Service 애플리케이션 | WebSocket, LiveKit |

###  개발 일정
- **1단계 (2주)**: 프로젝트 설정 및 기본 아키텍처 구축
- **2단계 (3주)**: 공통 UI 컴포넌트 및 디자인 시스템 개발
- **3단계 (4주)**: Pick-Learn 플랫폼 핵심 기능 개발
- **4단계 (3주)**: Chat-Service 실시간 기능 개발
- **5단계 (2주)**: 통합 테스트 및 최적화

---

## ️ 프로젝트 구조

```bash
📦learn-run-front
 ┣ 📂apps
 ┃ ┣ 📂pick-learn               #  학습 플랫폼 애플리케이션
 ┃ ┃ ┣ src
 ┃ ┃ ┃ ┣ 📂app
 ┃ ┃ ┃ ┃ ┣ (home)            # 홈 레이아웃
 ┃ ┃ ┃ ┃ ┃ ┣ sign-up         # 회원가입
 ┃ ┃ ┃ ┃ ┃ ┣ sign-in         # 로그인
 ┃ ┃ ┃ ┃ ┃ ┣ post            # 게시글 관리
 ┃ ┃ ┃ ┃ ┃ ┣ 📂profile         # 프로필 관리
 ┃ ┃ ┃ ┃ ┃ ┣ payment         # 결제 시스템
 ┃ ┃ ┃ ┃ ┃ ┣ search          # 검색 기능
 ┃ ┃ ┃ ┃ ┃ ┗ @modal          # 모달 컴포넌트
 ┃ ┃ ┃ ┗ 📂components           # 공통 컴포넌트
 ┃ ┃ ┗ 📂public                 # 정적 파일
 ┃ ┗ 📂chat-service             #  채팅 서비스 애플리케이션
 ┃   ┣ src
 ┃   ┃ ┣ 📂app
 ┃   ┃ ┃ ┣ (home)            # 홈 레이아웃
 ┃   ┃ ┃ ┃ ┣ home            # 홈 페이지
 ┃   ┃ ┃ ┃ ┣ messages        # 메시지 관리
 ┃   ┃ ┃ ┃ ┣ 📂profile         # 프로필 관리
 ┃   ┃ ┃ ┃ ┗ @modal          # 모달 컴포넌트
 ┃   ┃ ┃ ┗ api               # API 라우트
 ┃   ┃ ┗ features            # 기능별 컴포넌트
 ┃   ┗ 📂public                 # 정적 파일
 ┣ 📂packages
 ┃ ┣ 📂ui                        #  공유 UI 컴포넌트 (Shadcn/ui)
 ┃ ┃ ┣ 📂src
 ┃ ┃ ┃ ┣ 📂components           # UI 컴포넌트
 ┃ ┃ ┃ ┃ ┣ base              # 기본 컴포넌트
 ┃ ┃ ┃ ┃ ┗ wrapper           # 래퍼 컴포넌트
 ┃ ┃ ┃ ┣ styles              # 스타일 정의
 ┃ ┃ ┃ ┣ lib                 # 유틸리티
 ┃ ┃ ┃ ┗ assets              # 아이콘 및 이미지
 ┃ ┃ ┗ 📂components.json        # Shadcn/ui 설정
 ┃ ┣ 📂eslint-config            # ESLint 설정
 ┃ ┗ 📂typescript-config        # TypeScript 설정
 ┣ 📂.github                     # GitHub Actions 및 템플릿
 ┣ 📂.husky                      # Git hooks 설정
 ┗ 📂turbo.json                  # Turborepo 설정
```

---

##  주요 기능

###  Pick-Learn (학습 플랫폼)
- ** 게시글 관리**: 마크다운 에디터, 이미지 업로드
- ** 검색 기능**: 실시간 검색, 필터링
- **💳 결제 시스템**: 포인트 충전, 결제 내역
- **👤 프로필 관리**: 사용자 정보, 활동 내역
- **📚 카테고리 관리**: 학습 분야별 분류

###  Chat-Service (채팅 서비스)
- **💬 실시간 채팅**: WebSocket 기반 메시징
- ** 화상 통화**: LiveKit 기반 비디오 콜
- ** 그룹 채팅**: 다중 사용자 채팅방
- ** 메시지 관리**: 읽음 표시, 메시지 검색

---

## 🛠️ 개발 환경 설정

### 필수 요구사항
- Node.js 18.0.0 이상
- pnpm 8.0.0 이상
- Git

### 설치 및 실행

```bash
# 1. 저장소 클론
git clone https://github.com/your-username/learn-run-front.git
cd learn-run-front

# 2. 의존성 설치
pnpm install

# 3. 개발 서버 실행
# 학습 플랫폼 (포트 3000)
pnpm dev --filter pick-learn-front

# 채팅 서비스 (포트 3001)
pnpm dev --filter chat-service

# 4. 모든 앱 동시 실행
turbo dev
```

### 환경 변수 설정

```bash
# .env.local 파일 생성
cp .env.example .env.local

# 필요한 환경 변수 설정
NEXTAUTH_SECRET=your-secret-key
NEXTAUTH_URL=http://localhost:3000
AWS_ACCESS_KEY_ID=your-aws-access-key
AWS_SECRET_ACCESS_KEY=your-aws-secret-key
AWS_REGION=ap-northeast-2
```

---

##  패키지 관리

### 새로운 Shadcn/ui 컴포넌트 추가
```bash
cd packages/ui
pnpm dlx shadcn@latest add [component-name]
```

### 새로운 앱 추가
```bash
# Turborepo에 새 앱 등록
# turbo.json 파일 수정
```

---

## 🧪 테스트 및 품질 관리

### 코드 품질 검사
```bash
# 린트 검사
pnpm lint

# 타입 검사
pnpm check-types

# 빌드 테스트
pnpm build
```

### Git Hooks
- **pre-commit**: 린트 검사, 타입 검사
- **commit-msg**: 커밋 메시지 형식 검사

---

##  배포

### Vercel 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

### Docker 배포
```bash
# Docker 이미지 빌드
docker build -t learn-run-front .

# 컨테이너 실행
docker run -p 3000:3000 learn-run-front
```

---

##  기술 문서

### 아키텍처 가이드
- [Turborepo 모노레포 구조](./docs/architecture.md)
- [컴포넌트 설계 가이드](./docs/components.md)
- [API 설계 가이드](./docs/api.md)

### 개발 가이드
- [코딩 컨벤션](./docs/coding-conventions.md)
- [Git 워크플로우](./docs/git-workflow.md)
- [테스트 가이드](./docs/testing.md)

---

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.



