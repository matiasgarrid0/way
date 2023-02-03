import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

const JWT_SECRET = process.env.JWT_SECRET;
console.log(JWT_SECRET);
export async function middleware(request) {
  if (request.nextUrl.pathname.includes('/api/login')) return NextResponse.next();
  if (request.nextUrl.pathname.includes('/api/register')) return NextResponse.next();

  const jwt = request.cookies.get('authToken');
  console.log(jwt);
  if (request.nextUrl.pathname.includes('/api')) {
    if (!jwt) return NextResponse.redirect(new URL('/api/auth/unauthorized', request.url));
    try {
      await jwtVerify(jwt?.value, new TextEncoder().encode(JWT_SECRET));
      return NextResponse.next();
    } catch (error) {
      // return NextResponse.redirect(new URL('/401', request.url));
      return NextResponse.redirect(new URL('/api/auth/unauthorized', request.url))
    }
  } else {
    try {
      await jwtVerify(jwt?.value, new TextEncoder().encode(JWT_SECRET));
      return NextResponse.next();
    } catch (error) {
        console.log(error);
      return NextResponse.redirect(new URL('/register', request.url))
    }
  }
}

export const config = {
  matcher: ['/api/:path*', '/cursos/:path*','/home'],
};