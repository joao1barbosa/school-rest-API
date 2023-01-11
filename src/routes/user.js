import { Router } from 'express';
import userControler from '../controllers/User';

const router = new Router();

router.post('/', userControler.create);

export default router;
