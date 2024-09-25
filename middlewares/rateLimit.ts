import { NextRequest, NextResponse } from 'next/server'

const rateLimitMap = new Map()

export function rateLimit(handler: any) {
  return (req: NextRequest, res: NextResponse) => {
    const ip = req.headers.get('x-forwarded-for') || req.ip
    const limit = 60
    const time = 60 * 1000

    if (!rateLimitMap.has(ip)) {
      rateLimitMap.set(ip, {
        count: 0,
        lastReset: Date.now(),
      })
    }

    const ipData = rateLimitMap.get(ip)

    // Reset rate limit if it has been more than 60 seconds
    if (Date.now() > ipData.lastReset + time) {
      ipData.count = 0
      ipData.lastReset = Date.now()
    }

    if (ipData.count > limit) {
      return NextResponse.json(
        { message: 'Too many requests' },
        { status: 429 },
      )
    }

    ipData.count += 1

    return handler(req, res)
  }
}
