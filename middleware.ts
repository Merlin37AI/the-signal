import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Only intercept root — send first-time visitors to the intro splash
  if (request.nextUrl.pathname === '/') {
    const seen = request.cookies.get('gds-intro')
    if (!seen) {
      return NextResponse.redirect(new URL('/intro', request.url))
    }
  }
  return NextResponse.next()
}

export const config = {
  matcher: '/',
}
