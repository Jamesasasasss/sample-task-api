import express from 'express';
import testRoutes from './tests';
import taskRoutes from './tasks';

const router = express.Router();

router.use('/test', testRoutes);
router.use('/tasks', taskRoutes);

export default router;
