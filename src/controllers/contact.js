import ContactService from '../database/services/contact';
import out from '../helpers/response';

class ContactController {
  static async addContact(req, res) {
    try {
      const newContact = await ContactService.addContact(req.body);
      return out(res, 201, 'Contact Added', newContact);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default ContactController;
