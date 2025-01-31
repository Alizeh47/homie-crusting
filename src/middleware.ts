import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Check auth condition
  if (session?.user) {
    // If the user is signed in and the current path is / or auth-related,
    // redirect to /destinations
    if (
      req.nextUrl.pathname === '/' ||
      req.nextUrl.pathname.startsWith('/(auth)')
    ) {
      return NextResponse.redirect(new URL('/destinations', req.url));
    }
  } else {
    // If the user is not signed in and the current path is not / or auth-related,
    // redirect to /login
    if (
      !req.nextUrl.pathname.startsWith('/(auth)') &&
      req.nextUrl.pathname !== '/'
    ) {
      return NextResponse.redirect(new URL('/login', req.url));
    }
  }

  return res;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}; 