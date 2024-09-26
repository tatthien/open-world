import { connectDatabase } from '@/lib/db'
import Topic from '@/lib/db/models/topic'
import { rateLimit } from '@/middlewares/rateLimit'
import { NextRequest, NextResponse } from 'next/server'

await connectDatabase()

export async function GET() {
  const topics = await Topic.find({ status: 'published' })
    .sort({ createdAt: -1 })
  return NextResponse.json({ data: topics }, { status: 200 })
}

export const POST = rateLimit(
  async (req: NextRequest) => {
    try {
      const body = await req.json()


      if (!body.title) {
        return NextResponse.json(
          { message: 'title is missing' },
          { status: 400 },
        )
      }

      if (!body.content) {
        return NextResponse.json(
          { message: 'content is missing' },
          { status: 400 },
        )
      }

      const post = new Topic({
        title: body.title,
        content: body.content,
        backgroundImage: body.backgroundImage,
        backgroundColor: body.backgroundColor,
      })
      await post.save()

      return NextResponse.json({}, { status: 201 })
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 400 })
    }
  }
) 
