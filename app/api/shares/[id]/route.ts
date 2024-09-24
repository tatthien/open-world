import { Data } from "@/types"
import { JSONFilePreset } from "lowdb/node"
import { NextRequest, NextResponse } from "next/server"

const defaultData: Data = { posts: [] }
const db = await JSONFilePreset('db.json', defaultData)

export async function GET(res: NextRequest) {
  const id = res.nextUrl.pathname.split('/').pop()

  const post = db.data.posts.find((post) => post.id === id)

  if (!post) {
    return NextResponse.json({ message: 'post not found' }, { status: 404 })
  }

  return NextResponse.json({ data: post }, { status: 200 })
}
