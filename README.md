# Boilerplate: Turborepo + Shadcn/ui + Tailwind CSS v4 + Next.js

## Introduction

- I created this setup to share after completing the migration process from Tailwind CSS v3 to v4 in a monorepo structure, as I found it difficult to find documentation on this. It offers a ready-to-use configuration with Turborepo, Tailwind CSS v4, Shadcn/ui, and Next.js.

- Since I can’t always keep this up to date, please adjust versions like `react`, `next` and others as needed.

- Please use this with a basic understanding of Monorepo concepts using Turborepo.  
[-> Turborepo Docs](https://turborepo.com/docs)

## Getting Started

```bash
# Clone the repository
git clone https://github.com/bytaesu/turborepo-shadcn-tailwind-v4.git

# Install dependencies
pnpm install

# Run the development server
turbo dev --filter nextjs

# Add new shadcn component
cd packages/ui
pnpm dlx shadcn@latest add [component]
```

or

Use this button:

[<img width="170" alt="img" src="https://github.com/user-attachments/assets/28541bbe-2c49-4c8e-8d09-84ff13c29a54" />](https://github.com/new?template_name=turborepo-shadcn-tailwind-v4&template_owner=bytaesu)

### 📁 프로젝트 구조

[FRONT]

```bash
📦learn-run-front
 ┣ 📂apps
 ┃ ┣ 📂pick-learn               # 학습 플랫폼 애플리케이션
 ┃ ┃ ┣ 📂src
 ┃ ┃ ┃ ┣ 📂app
 ┃ ┃ ┃ ┃ ┣ 📂(home)            # 홈 레이아웃
 ┃ ┃ ┃ ┃ ┃ ┣ 📂sign-up         # 회원가입
 ┃ ┃ ┃ ┃ ┃ ┣ 📂sign-in         # 로그인
 ┃ ┃ ┃ ┃ ┃ ┣ 📂post            # 게시글 관리
 ┃ ┃ ┃ ┃ ┃ ┣ 📂profile         # 프로필 관리
 ┃ ┃ ┃ ┃ ┃ ┣ 📂payment         # 결제 시스템
 ┃ ┃ ┃ ┃ ┃ ┣ 📂search          # 검색 기능
 ┃ ┃ ┃ ┃ ┃ ┗ 📂@modal          # 모달 컴포넌트
 ┃ ┃ ┃ ┗ 📂components           # 공통 컴포넌트
 ┃ ┃ ┗ 📂public                 # 정적 파일
 ┃ ┗ 📂chat-service             # 채팅 서비스 애플리케이션
 ┃   ┣ 📂src
 ┃   ┃ ┣ 📂app
 ┃   ┃ ┃ ┣ 📂(home)            # 홈 레이아웃
 ┃   ┃ ┃ ┃ ┣ 📂home            # 홈 페이지
 ┃   ┃ ┃ ┃ ┣ 📂messages        # 메시지 관리
 ┃   ┃ ┃ ┃ ┣ 📂profile         # 프로필 관리
 ┃   ┃ ┃ ┃ ┗ 📂@modal          # 모달 컴포넌트
 ┃   ┃ ┃ ┗ 📂api               # API 라우트
 ┃   ┃ ┗ 📂features            # 기능별 컴포넌트
 ┃   ┗ 📂public                 # 정적 파일
 ┣ 📂packages
 ┃ ┣ 📂ui                        # 공유 UI 컴포넌트 (Shadcn/ui)
 ┃ ┃ ┣ 📂src
 ┃ ┃ ┃ ┣ 📂components           # UI 컴포넌트
 ┃ ┃ ┃ ┃ ┣ 📂base              # 기본 컴포넌트
 ┃ ┃ ┃ ┃ ┗ 📂wrapper           # 래퍼 컴포넌트
 ┃ ┃ ┃ ┣ 📂styles              # 스타일 정의
 ┃ ┃ ┃ ┣ 📂lib                 # 유틸리티
 ┃ ┃ ┃ ┗ 📂assets              # 아이콘 및 이미지
 ┃ ┃ ┗ 📂components.json        # Shadcn/ui 설정
 ┃ ┣ 📂eslint-config            # ESLint 설정
 ┃ ┗ 📂typescript-config        # TypeScript 설정
 ┣ 📂.github                     # GitHub Actions 및 템플릿
 ┣ 📂.husky                      # Git hooks 설정
 ┗ 📂turbo.json                  # Turborepo 설정
```


## Critical Configuration

[-> Tailwind CSS Docs](https://tailwindcss.com/docs/detecting-classes-in-source-files)

The most important part of this setup is the `/src/app/globals.css` file in the Next.js application. Proper configuration of the `@source` directive is essential for the UI package to work correctly:

```css
@import 'tailwindcss';
@import '@repo/ui/styles/default.css';

@source '../../node_modules/@repo/ui';
```

## License

MIT
