import mongoose from 'mongoose'

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
  entity: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    refPath: 'entityType',
  },
  entityType: {
    type: String,
    enum: {
      values: ['Post'],
      message: '{VALUE} is not supported',
    },
    require: true,
  },
})

export default mongoose.models.Comment || mongoose.model('Comment', schema)
