import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const res = NextResponse.next()

  // Only apply aggressive no-cache in development
  const isDev = process.env.NODE_ENV !== 'production'
  const accept = request.headers.get('accept') || ''

  if (isDev && (accept.includes('text/html') || accept.includes('application/json'))) {
    res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    res.headers.set('Pragma', 'no-cache')
    res.headers.set('Expires', '0')
    res.headers.set('Surrogate-Control', 'no-store')
  }

  return res
}

// Exclude Next static files and api/image optimizations
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|.*\.(?:png|jpg|jpeg|gif|webp|avif|svg|woff2?|ttf|otf|eot)).*)'],
}
