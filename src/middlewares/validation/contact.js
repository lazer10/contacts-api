/* eslint-disable import/prefer-default-export */
import validator from '../../helpers/validator';
import addContactSchema from './schemas/contacts/addContacts';

export const addContact = (req, res, next) => (
  validator(addContactSchema, req.body, res, next)
);
