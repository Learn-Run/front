# 1. 빌드 단계
FROM node:18 AS builder

WORKDIR /app
COPY . .


RUN npm install -g pnpm turbo
RUN pnpm install

# 앱들 빌드
RUN turbo run build --filter=pick-learn-front --filter=chat-service

# 2. 실행 단계
FROM node:18-slim

WORKDIR /app
COPY --from=builder /app .

RUN npm install -g pnpm concurrently

# 필요한 환경변수는 .env 파일로 EC2에 mount 또는 --env로 넘겨야 함

EXPOSE 3000 3001

CMD ["concurrently", "--kill-others", "--names", "pick,chat", \
     "pnpm --filter pick-learn run start", \
     "pnpm --filter chat-service run start"]