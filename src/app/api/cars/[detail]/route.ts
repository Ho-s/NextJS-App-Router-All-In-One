import { NextRequest, NextResponse } from 'next/server';

export async function GET(_: NextRequest, { params: { detail } }: { params: { detail: string } }) {
  const res = await fetch(`https://647de137af984710854a86f2.mockapi.io/api/v1/cars/${detail}`);

  const data = await res.json();

  return NextResponse.json(data);
}
