import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export async function GET(_request: NextRequest) {
  const attendance = {
    present: 52,
    absent: 12,
    total: 64
  };

  return NextResponse.json(attendance);
}
