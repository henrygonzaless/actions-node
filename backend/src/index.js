const Koa = require('koa')
const Router = require('koa-router')
const Logger = require('koa-logger')
const jsonBody = require('koa-json-body')

const db = require('./db/pg.js')

const app = new Koa()
const router = new Router()

router
    .get('/cars', async ctx => {
        const cars = await db('cars')
        if(!cars){
            ctx.status = 500
            ctx.body = 'Could not create car'
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
    .put('/cars/:id', async ctx => {
        const updateCar = await db('cars').where('id','=', ctx.params.id).update(ctx.request.body)
        if(!updateCar) {
            ctx.status = 500
            ctx.body = 'Could not update car'
        }
        ctx.status = 200
        ctx.body = 'Car Updated'
    })
    .del('/cars/:id', async ctx => {
        const deleteCar = await db('cars').where('id', '=', ctx.params.id).del()
        if(!deleteCar){
            ctx.status = 500
            ctx.body = 'Could not delete car'
        }
        ctx.status = 200
        ctx.body = 'Car Deleted'
    })

app.use(jsonBody())
app.use(Logger())
app.use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
    console.log('Test app is on port 3000')
})