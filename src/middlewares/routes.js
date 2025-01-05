import { buildRoutePath } from "../utils/build-route-path.js";
import { Database } from "./database.js";
import { randomUUID } from "node:crypto";

const database = new Database();

export const routes = [
    {
        method: 'POST',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { title, description } = req.body

            const task = {
                id: randomUUID(),
                title,
                description,
                completed_at: null,
                created_at: new Date(),
                updated_at: new Date(),
            }

            database.insert('tasks', task)

            return res.writeHead(201).end()
        },
    },
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const { search } = req.query

            const tasks = database.select('tasks', search ? {
                title: search,
                description: search,
                completed_at: search,
                created_at: search,
                updated_at: search,
            } : null);

            return res.end(JSON.stringify(tasks));
        },
    },
    {
        method: 'PUT',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params
            const { title, description } = req.body

            const task = database.selectById("tasks", id )

            if (!task) {
                return res.status(404).end('Task not foud')
            }

            const updatedTask = {
                ...task,
                updated_at: new Date(),
                ...(title && {title}),
                ...(description && {description})
            }

            database.update('tasks', id, updatedTask)

            return res.writeHead(204).end()
        },
    },
    {
        method: 'DELETE',
        path: buildRoutePath('/tasks/:id'),
        handler: (req, res) => {
            const { id } = req.params

            database.delete('tasks', id)

            return res.writeHead(204).end()
        },
    },
    {
        method: 'PATCH',
        path: buildRoutePath('/tasks/:id/complete'),
        handler: (req, res) => {
            const { search } = req.query

            const tasks = database.select('tasks', search ? {
                title: search,
                description: search,
                completed_at: search,
                created_at: search,
                updated_at: search,
            } : null);

            return res.end(JSON.stringify(tasks));
        },
    },
]