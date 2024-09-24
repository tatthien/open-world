import mongoose from 'mongoose'

export async function connectDatabase() {
  const uri = process.env.MONGO_DB_URL;
  await mongoose.connect(uri)
}

