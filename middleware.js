import {NextRequest} from 'next/server';
import {NextResponse} from 'next/server';

const Middleware = (NextRequest, NextResponse) => {
    if(NextRequest.nextUrl.pathname.startsWith('/admin')){
    }
}

export default Middleware;