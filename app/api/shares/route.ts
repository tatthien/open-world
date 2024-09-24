import { NextRequest, NextResponse } from "next/server";
import { nanoid } from 'nanoid'
import dayjs from 'dayjs'
import { db } from "@/lib/db";

export async function GET() {
  const posts = [...db.data.posts]
  posts.sort((a, b) => dayjs(b.createdAt).unix() - dayjs(a.createdAt).unix())
  return NextResponse.json({ data: posts }, { status: 200 })
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    if (!body.content) {
      return NextResponse.json({ message: 'content is missing' }, { status: 400 })
    }

    await db.update(({ posts }) => posts.push({
      id: nanoid(),
      content: body.content,
      createdAt: new Date().toISOString()
    }))
    await db.write()

    return NextResponse.json({}, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 400 })
  }
}
