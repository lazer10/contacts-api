import Contact from '../models/contact';

class ContactService {
  static async addContact(contact) {
    try {
      return await Contact.create(contact);
    } catch (error) {
      throw error;
    }
  }
}

export default ContactService;
