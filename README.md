
# INSTALAÇÃO

1) INSTALAÇÃO DO ZERO
mkdir node-api
npm init
npx tsc --init

npm install typescript
npm install -D @types/node
npm install -D tsup

npm install dotenv
npm install fastify
npm install vitest
npm install @vitest/coverage-v8
npm install knex --save
npm install sqlite3 --save
npm install zod
npm install tsx

nano package.json
inclua o tipo:   "type": "module",
nano tsconfig.json
altere para:
   "module": "es2022",
   "target": "es2022",

mkdir src
cd src
nano server.ts
inclua as linhas abaixo:

import Fastify from 'fastify'
const fastify = Fastify()
fastify.get('/', function (request, reply) {
  reply.send({ hello: 'world' })
})

fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})