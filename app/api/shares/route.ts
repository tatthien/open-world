import { connectDatabase } from '@/lib/db'
import Post from '@/lib/db/models/post'
import { NextRequest, NextResponse } from 'next/server'

await connectDatabase()

export async function GET() {
  const posts = await Post.find({ status: 'published' }).sort({ createdAt: -1 })
  return NextResponse.json({ data: posts }, { status: 200 })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.content) {
      return NextResponse.json(
        { message: 'content is missing' },
        { status: 400 },
      )
    }

    const post = new Post({
      content: body.content,
    })
    await post.save()

    return NextResponse.json({}, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 })
  }
}
