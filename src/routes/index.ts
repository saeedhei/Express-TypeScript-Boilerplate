// TS
import express, { Request, Response } from 'express';
import userRoutes from '../domain/users/controllers/userController';
const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response): void => {
  res.render('index', { title: 'Express' });
});

router.use('/users', userRoutes);

export default router;
