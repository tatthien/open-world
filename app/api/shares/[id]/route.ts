import { NextRequest, NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(_: NextRequest, { params }: { params: { id: string } }) {
  const id = params.id

  console.log('>>> [id]:', id)

  const post = db.data.posts.find((post) => post.id === id)

  if (!post) {
    return NextResponse.json({ message: 'post not found' }, { status: 404 })
  }

  return NextResponse.json({ data: post }, { status: 200 })
}
