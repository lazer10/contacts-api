import mongoose from 'mongoose';

const ContactSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone_number: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Contact', ContactSchema);
