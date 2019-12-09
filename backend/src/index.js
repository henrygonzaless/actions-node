const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')

const app = new Koa()
const router = new Router()

router.get('/', async ctx => {
    ctx.status = 200
    ctx.body = 'Hello there'
})

app.use(Logger())
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Test app is on port 3000')
})