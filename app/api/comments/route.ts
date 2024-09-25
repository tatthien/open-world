import { connectDatabase } from '@/lib/db'
import { NextRequest, NextResponse } from 'next/server'
import Comment from '@/lib/db/models/comment'
import { rateLimit } from '@/middlewares/rateLimit'

await connectDatabase()

export const GET = async (req: NextRequest) => {
  const query = req.nextUrl.searchParams
  const entity = query.get('entity')
  const entityType = query.get('entityType')

  if (!entity || !entityType) {
    return NextResponse.json(
      { message: 'entity or entityType is missing' },
      { status: 400 },
    )
  }

  const comments = await Comment.find({ entity, entityType })
    .select('content createdAt')
    .sort({ createdAt: -1 })

  return NextResponse.json({ data: comments }, { status: 200 })
}

export const POST = rateLimit(async (req: NextRequest) => {
  try {
    const body = await req.json()

    if (!body.content) {
      return NextResponse.json(
        { message: 'content is missing' },
        { status: 400 },
      )
    }

    if (!body.entity) {
      return NextResponse.json(
        { message: 'entity is missing' },
        { status: 400 },
      )
    }

    if (!body.entityType) {
      return NextResponse.json(
        { message: 'entityType is missing' },
        { status: 400 },
      )
    }

    const comment = new Comment({
      content: body.content,
      entity: body.entity,
      entityType: body.entityType,
    })
    await comment.save()

    return NextResponse.json({}, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 })
  }
})
