import { NextRequest, NextResponse } from 'next/server'

const Middleware = (NextRequest) => {
    if(NextRequest.nextUrl.pathname === ('/admin')){
        //return NextResponse.redirect(new URL('/login', NextRequest.url));
    }
}

export default Middleware;