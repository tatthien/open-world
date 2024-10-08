import mongoose from 'mongoose'
import Topic from './topic'
import Comment from './comment'

const schema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, 'content is required'],
    maxLength: [5000, 'content cannot be more than 5000 characters'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: {
      values: ['draft', 'published', 'archived'],
      message: '{VALUE} is not supported',
    },
    default: 'published',
  },
  topic: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Topic,
    require: [true, 'topic is required'],
  }
})

schema.virtual('comments', {
  ref: Comment,
  localField: '_id',
  foreignField: 'entity',
})

schema.virtual('commentCount', {
  ref: Comment,
  localField: '_id',
  foreignField: 'entity',
  count: true,
})

schema.set('toJSON', { virtuals: true })
schema.set('toObject', { virtuals: true })

export default mongoose.models.Post || mongoose.model('Post', schema)
