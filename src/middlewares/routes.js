import { buildRoutePath } from "../utils/build-route-path.js";
import { Database } from "./database.js";
import {randomUUID} from "node:crypto";

const database = new Database();

export const routes = [
    {
        method: 'GET',
        path: buildRoutePath('/tasks'),
        handler: (req, res) => {
            const {search} = req.query

            const tasks = database.select('tasks', search? {
                title: search,
                description: search,
                completed_at: search,
                created_at: search,
                updated_at: search,
            } : null);

            return res.end(JSON.stringify(tasks));
        },
    }
]