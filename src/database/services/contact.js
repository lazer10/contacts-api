import Contact from '../models/contact';

class ContactService {
  static async addContact(contact) {
    try {
      return await Contact.create(contact);
    } catch (error) {
      throw error;
    }
  }

  static async getAllContacts() {
    try {
      return await Contact.find();
    } catch (error) {
      throw error;
    }
  }

  static async getSingleContact(params) {
    try {
      return await Contact.findOne(params);
    } catch (error) {
      throw error;
    }
  }

  static async updateContact(filter, update) {
    try {
      return await Contact.findOneAndUpdate(filter, update);
    } catch (error) {
      throw error;
    }
  }
}

export default ContactService;
