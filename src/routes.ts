import { Router, Request, Response } from 'express'
import { getUsers, getUser, saveUser, updateUser, deleteUser } from './controller/UserController';
import { getTasks, getTask, saveTask, updateTask, finishedTask, deleteTask } from './controller/TaskController'

export const routes = Router()

routes.get('/', (req: Request, res: Response): Response => {
    return res.json({ msg: 'Hello DvWebCoding!' })
});

routes.get('/users', getUsers);
routes.get('/users/:id', getUser);
routes.post('/users', saveUser);
routes.put('/users/:id', updateUser);
routes.delete('/users/:id', deleteUser);

routes.get('/tasks', getTasks);
routes.get('/tasks/:id', getTask);
routes.post('/tasks', saveTask);
routes.put('/tasks/:id', updateTask);
routes.patch('/tasks/:id', finishedTask);
routes.delete('/tasks/:id', deleteTask);