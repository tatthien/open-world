import { NextRequest, NextResponse } from 'next/server'
import { connectDatabase } from '@/lib/db'
import Topic from '@/lib/db/models/topic'

await connectDatabase()

export async function GET(
  _: NextRequest,
  { params }: { params: { id: string } },
) {
  const id = params.id
  const data = await Topic.findOne({
    _id: id,
    status: 'published',
  })
  if (!data) {
    return NextResponse.json({ message: 'topic not found' }, { status: 404 })
  }

  return NextResponse.json({ data }, { status: 200 })
}
