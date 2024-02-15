import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(`https://647de137af984710854a86f2.mockapi.io/api/v1/cars`);

  const data = await res.json();

  return NextResponse.json(data);
}
