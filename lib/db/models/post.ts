import mongoose from "mongoose";

const schema = new mongoose.Schema({
  content: String,
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'published',
  }
})

export default mongoose.models.Post || mongoose.model('Post', schema)
