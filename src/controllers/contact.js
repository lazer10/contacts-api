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

  static async getAllContacts(req, res) {
    try {
      const contacts = await ContactService.getAllContacts();
      if (contacts.length === 0) return out(res, 404, 'No Contacts found', null, 'NOT_FOUND');
      return out(res, 200, 'All Contacts', contacts);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async getSingleContact(req, res) {
    try {
      const { id } = req.params;
      const contact = await ContactService.getSingleContact({ _id: id });
      if (!contact) return out(res, 404, 'No Contact found', null, 'NOT_FOUND');
      return out(res, 200, 'Contacts', contact);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async updateContact(req, res) {
    try {
      const { id } = req.params;
      const contact = await ContactService.getSingleContact({ _id: id });
      if (!contact) return out(res, 404, 'No Contact found', null, 'NOT_FOUND');
      const updatedContact = await ContactService.updateContact({ _id: id }, req.body);
      return out(res, 200, 'Contact updated', updatedContact);
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }

  static async deleteContact(req, res) {
    try {
      const { id } = req.params;
      const contact = await ContactService.getSingleContact({ _id: id });
      if (!contact) return out(res, 404, 'No Contact found', null, 'NOT_FOUND');
      await ContactService.deleteContact(contact);
      return out(res, 200, 'Contact Deleted');
    } catch (error) {
      return out(res, 500, error.message || error, null, 'SERVER_ERROR');
    }
  }
}

export default ContactController;
