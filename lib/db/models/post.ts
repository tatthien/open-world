import mongoose from "mongoose";

const schema = new mongoose.Schema({
  content: {
    type: String,
    minLength: [1, 'content is required.'],
    maxLength: [5000, 'content is too long. Must be less than 5000 characters.'],
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  status: {
    type: String,
    enum: {
      values: ['draft', 'published', 'archived'],
      message: '{VALUE} is not supported',
    },
    default: 'published',
  }
})

export default mongoose.models.Post || mongoose.model('Post', schema)
