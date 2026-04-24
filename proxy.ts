import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
  const acceptHeader = request.headers.get('accept');
  const linkHeader =
    '</.well-known/api-catalog>; rel="api-catalog", </.well-known/agent-skills/index.json>; rel="agent-skills", </.well-known/mcp/server-card.json>; rel="mcp-server-card"';

  // Markdown negotiation
  if (acceptHeader && acceptHeader.includes('text/markdown') && request.nextUrl.pathname === '/') {
    const markdownContent = `
# Giannis Vasilopoulos - Software Engineer

Welcome to my portfolio. I am a Software Engineer specialized in building modern web applications.

## About Me
I focus on creating high-performance, accessible, and visually appealing user interfaces.

## Skills
- React / Next.js
- TypeScript
- Node.js
- Contentful CMS

## Contact
You can find more information and contact me at https://giannis-vasilopoulos.com/
    `.trim();

    return new NextResponse(markdownContent, {
      headers: {
        'Content-Type': 'text/markdown',
        'x-markdown-tokens': 'true',
        Link: linkHeader,
      },
    });
  }

  const response = NextResponse.next();
  response.headers.set('Link', linkHeader);

  // Handle /.well-known/api-catalog content type
  if (request.nextUrl.pathname === '/.well-known/api-catalog') {
    response.headers.set('Content-Type', 'application/linkset+json');
  }

  return response;
}

export const config = {
  matcher: ['/', '/api/:path*', '/.well-known/:path*'],
};
