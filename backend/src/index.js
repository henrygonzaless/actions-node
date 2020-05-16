const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const jsonBody = require('koa-json-body')

const db = require('./db/pg.js')

const app = new Koa()
const router = new Router()

router
    .get('/', async ctx => {
        ctx.status = 200
        ctx.body = 'Hello there'
    })
    .get('/cars', async ctx => {
        const cars = await db('cars')
        if(!cars){
            ctx.status = 400
            ctx.body = 'there was an error'
        }
        ctx.status = 200
        ctx.body = cars
    })
    .post('/cars', async ctx => {
        const newCar = await db('cars').insert(ctx.request.body)
        if(!newCar){
            ctx.status = 500
            ctx.body = 'There was an error'
        }
        ctx.status = 200
        ctx.body = 'Car Created'
    })

app.use(jsonBody())
app.use(Logger())
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Test app is on port 3000')
})