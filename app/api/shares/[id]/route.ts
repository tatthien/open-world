import { NextRequest, NextResponse } from 'next/server'
import { connectDatabase } from '@/lib/db'
import Post from '@/lib/db/models/post'

await connectDatabase()

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const post = await Post.findOne({
    _id: id,
    status: 'published',
  }).populate('commentCount')
  if (!post) {
    return NextResponse.json({ message: 'post not found' }, { status: 404 })
  }

  return NextResponse.json({ data: post }, { status: 200 })
}
