import express from 'express'

import UserController from '../Controllers/UsersController.js'

const UsersRouter = express.Router()

UsersRouter.get('/', UserController.getList)

UsersRouter.get('/:id', UserController.getById)

UsersRouter.post('/', UserController.add)

UsersRouter.put('/:id', UserController.update)

UsersRouter.delete('/:id', UserController.delete)

export default UsersRouter;