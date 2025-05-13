import { getPublishedPosts } from '@/lib/notion';
import { NextResponse } from 'next/server';
// import { NextResponse, type NextRequest } from 'next/server';

// export async function GET(request: NextRequest) {
export async function GET() {
  const posts = await getPublishedPosts();

  return NextResponse.json(posts);
}
