import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
  const results = await Promise.all(
    Array.from({ length: 20 }, (_, i) =>
      axios.get(`https://superheroapi.com/api/6693a8e1a7f9c94e3b2b825182db6271/${i + 1}`)
    )
  );
  return NextResponse.json(results.map((r) => r.data));
}
