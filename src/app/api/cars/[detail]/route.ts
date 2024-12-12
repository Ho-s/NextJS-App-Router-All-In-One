import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params }: { params: Promise<{ detail: string }> }) {
  const { detail } = await params;
  const res = await fetch(`https://647de137af984710854a86f2.mockapi.io/api/v1/cars/${detail}`);

  const data = await res.json();

  return NextResponse.json(data);
}
