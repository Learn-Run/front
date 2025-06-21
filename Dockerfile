# 1. 빌드 단계
FROM node:18 AS builder

WORKDIR /app
COPY . .

COPY apps/pick-learn/.env.production apps/pick-learn/.env.production
COPY apps/chat-service/.env.production apps/chat-service/.env.production

RUN npm install -g pnpm turbo
RUN pnpm install

# 앱들 빌드
RUN turbo run build --filter=pick-learn --filter=chat-service

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

# 실행 스테이지
#FROM node:18-slim
#WORKDIR /app
#COPY --chown=node:node --from=builder /app/public ./public
#COPY --chown=node:node --from=builder /app/.next/static ./.next/static
#COPY --chown=node:node --from=builder /app/.next/standalone ./
#COPY --from=builder /app/.next/standalone/node_modules ./.next/node_modules
#COPY --from=builder /app/package.json ./package.json

#EXPOSE 3000 3001
#
#CMD ["pnpm", "run", "start"]
