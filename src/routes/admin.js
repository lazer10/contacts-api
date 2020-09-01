import { Router } from 'express';
import Controller from '../controllers/admin';

const router = Router();

router.post('/login', Controller.login);

export default router;
