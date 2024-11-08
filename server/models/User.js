// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobileNumber:{type:Number, required:true},
  isPaid:{type:Boolean, default:false},
  takenServices:{type:String},
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
export default User;
