import mongoose from 'mongoose'
import('./models/comment')
import('./models/post')

export async function connectDatabase() {
  const uri = process.env.MONGO_DB_URL
  await mongoose.connect(uri)
}
