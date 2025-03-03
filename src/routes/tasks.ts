import express, { Request, Response } from 'express';
import TasksService from '../services/tasksService';
import { knex } from '../database';

const tasksService = new TasksService(knex);

const router = express.Router();

// create resource
router.post('/', async (req: Request, res: Response) => {
  try {
    const task = await tasksService.create(req.body);
    res.status(201).json({ data: task });
  } catch (error) {
    res.status(500).json({ message: 'Error creating task', error });
  }
});

// list all resource
router.get('/', async (req: Request, res: Response) => {
  try {
    const tasks = await tasksService.list(req.query);
    res.status(200).json({ data: tasks });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
});

// get a resource
router.get('/:taskId', async (req: Request, res: Response) => {
  try {
    const task = await tasksService.get(req.params.taskId);
    res.status(200).json({ data: task });
  } catch (error) {
    res.status(500).json({ message: 'Task not found', error });
  }
});

// update a resource
router.put('/:taskId', async (req: Request, res: Response) => {
  try {
    const task = await tasksService.update(req.params.taskId, req.body);
    res.status(201).json({ data: task });
  } catch (error) {
    res.status(500).json({ message: 'Error updating task', error });
  }
});

// delete a resource
router.delete('/:taskId', async (req: Request, res: Response) => {
  try {
    const task = await tasksService.get(req.params.taskId);
    res.status(200).json({ data: task });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting task', error });
  }
});

export default router;
