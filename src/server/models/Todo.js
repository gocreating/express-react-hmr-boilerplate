import mongoose from 'mongoose';

let Todo = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: String,
  detail: String,
}, {
  versionKey: false,
});

export default mongoose.model('Todo', Todo);