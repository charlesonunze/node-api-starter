import { Router } from 'express';
import { sayHello } from '../controllers/rootController';
import catchAsyncErrors from '../middlewares/catch-async-errors';

const router = Router();

router.get('/', catchAsyncErrors(sayHello));

export { router as rootRoute };
