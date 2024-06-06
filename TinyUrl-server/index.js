import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'

import connectDB from './database.js'
import LinksRouter from './Routers/LinksRouter.js'
import UsersRouter from './Routers/UsersRouter.js'
import LinksController from './Controllers/LinksController.js'
import UserController from './Controllers/UsersController.js'


connectDB()
const app = express()

app.use(cors())
app.use(bodyParser.json())

app.get('/redirect/:id', LinksController.redirect)
app.get('/getClicksByTarget/:id', UserController.getClicksByTarget)

app.use('/links', LinksRouter)
app.use('/users', UsersRouter)

app.listen(5000, () => {
    console.log('app is running on http://localhost:5000')
})