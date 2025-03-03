import express, { Request, Response } from 'express';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    res.status(200).json({ message: 'Hello' });
  } catch (error) {
    res.status(500).json({ message: 'Error accessing endpoint', error });
  }
});

export default router;
