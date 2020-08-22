import { Router } from 'express';
import Controller from '../controllers/contact';

const router = Router();

router.post('/new', Controller.addContact);

export default router;
