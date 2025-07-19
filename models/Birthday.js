import mongoose from 'mongoose';

const birthdaySchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});



const Birthday = mongoose.model('Birthday', birthdaySchema);

export default Birthday;
