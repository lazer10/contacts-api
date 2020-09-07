import { Router } from 'express';
import Controller from '../controllers/contact';
import * as Authorization from '../middlewares/authorization';
import * as Validations from '../middlewares/validation/contact';

const router = Router();

router.get('/', Controller.getAllContacts);
router.get('/:id', Controller.getSingleContact);

router.post('/new', Validations.addContact, Controller.addContact);

router.put('/:id', Authorization.isAdmin, Controller.updateContact);

router.delete('/delete/:id', Authorization.isAdmin, Controller.deleteContact);

export default router;
