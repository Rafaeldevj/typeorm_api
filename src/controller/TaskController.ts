import { getRepository } from 'typeorm'
import { Task } from '../entity/Task'
import { Request, Response } from 'express'

export const getTasks = async (request: Request, response: Response) => {
    const tasks = await getRepository(Task).find()
    return response.json(tasks)
}

export const getTask = async (request: Request, response: Response) => {
    const { id } = request.params
    const task = await getRepository(Task).findOne(id)
    return response.json(task)
}

export const saveTask = async (request: Request, response: Response) => {
    const task = await getRepository(Task).save(request.body)
    return response.json(task)
}

export const updateTask = async (request: Request, response: Response) => {
    const { id } = request.params
    const task = await getRepository(Task).update(id, request.body)

    if (task.affected === 1) {
        const taskUpdated = await getRepository(Task).findOne(id)
        return response.json(taskUpdated)
    }

    return response.status(404).json({ message: 'Task not found!' })
}

export const finishedTask = async (request: Request, response: Response) => {
    const { id } = request.params
    const task = await getRepository(Task).update(id, {
        finished: true
    })

    if (task.affected === 1) {
        const taskUpdated = await getRepository(Task).findOne(id)
        return response.json(taskUpdated)
    }

    return response.status(404).json({ message: 'Task not found!' })
}

export const deleteTask = async (request: Request, response: Response) => {
    const { id } = request.params
    const task = await getRepository(Task).delete(id)

    if (task.affected === 1) {
        return response.json({ message: 'Taske removed!' })
    }

    return response.status(404).json({ message: 'Task not found!' })
};