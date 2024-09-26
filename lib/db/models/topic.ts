import mongoose from "mongoose";

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'title is required'],
    maxLength: [200, 'title cannot be more than 200 characters'],
  },
  content: {
    type: String,
    required: [true, 'content is required'],
    maxLength: [5000, 'content cannot be more than 5000 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  backgroundImage: {
    type: String,
  },
  backgroundColor: {
    type: String,
  },
  status: {
    type: String,
    enum: {
      values: ['draft', 'published', 'archived'],
      message: '{VALUE} is not supported',
    },
    default: 'published',
  },
})

schema.virtual('posts', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'topic',
})

schema.set('toJSON', { virtuals: true })
schema.set('toObject', { virtuals: true })

export default mongoose.models.Topic || mongoose.model('Topic', schema)
