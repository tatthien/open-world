import Post from '@/lib/db/models/post'
import { rateLimit } from '@/middlewares/rateLimit'
import { NextRequest, NextResponse } from 'next/server'

export const GET = async (req: NextRequest, { params }: { params: { id: string } }) => {
  const posts = await Post.find({ status: 'published', topic: params.id }).populate('topic')
    .populate('commentCount')
    .sort({ createdAt: -1 })
  return NextResponse.json({ data: posts }, { status: 200 })
}

export const POST = rateLimit(
  async (req: NextRequest, { params }: { params: { id: string } }) => {
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
        topic: params.id,
      })
      await post.save()

      return NextResponse.json({}, { status: 201 })
    } catch (err) {
      return NextResponse.json({ error: err }, { status: 400 })
    }
  }
) 
