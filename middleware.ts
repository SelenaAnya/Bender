import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// This function can be marked `async` if using `await` inside
export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Захист адмін панелі
  if (pathname.startsWith('/admin')) {
    const auth = request.cookies.get('admin-auth');
    
    if (!auth) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
};