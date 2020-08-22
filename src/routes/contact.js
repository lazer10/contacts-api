import { Router } from 'express';
import Controller from '../controllers/contact';

const router = Router();

router.get('/', Controller.getAllContacts);
router.get('/:id', Controller.getSingleContact);

router.post('/new', Controller.addContact);

export default router;
