import { Router } from 'express';
import contact from './contact';
import admin from './admin';

const router = Router();

router.use('/admin', admin);
router.use('/contacts', contact);

export default router;
