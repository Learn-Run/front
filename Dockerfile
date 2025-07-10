# 1. 빌드 단계
FROM node:22 AS builder

WORKDIR /app
COPY . .

RUN npm install -g pnpm@9.15.5 turbo
RUN pnpm install

# 앱들 빌드
RUN turbo run build --filter=pick-learn-front --filter=chat-service

# 2. 실행 단계
FROM node:22-slim

WORKDIR /app
COPY --from=builder /app .

# ps 명령어(procps) 설치 + pnpm 깨짐 방지
RUN apt-get update && apt-get install -y procps && \
    corepack disable && npm install -g pnpm concurrently && \
    rm -rf /var/lib/apt/lists/*

# 필요한 환경변수는 .env 파일로 EC2에 mount 또는 --env로 넘겨야 함
EXPOSE 3000 3001

CMD ["concurrently", "--kill-others", "--names", "pick,chat", \
     "pnpm --filter pick-learn-front run start", \
     "pnpm --filter chat-service run start"]
