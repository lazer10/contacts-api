import { Router } from 'express';
import contact from './contact';

const router = Router();

router.use('/contacts', contact);

export default router;
