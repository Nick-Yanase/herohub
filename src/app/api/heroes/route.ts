import { NextResponse } from 'next/server';
import axios from 'axios';
import { Hero } from '@/types/Hero';

export async function GET() {
  const token = process.env.SUPERHERO_API_TOKEN;

  const results = await Promise.all(
    Array.from({ length: 20 }, (_, i) =>
      axios.get<Hero>(`https://superheroapi.com/api/${token}/${i + 1}`)
    )
  );
  return NextResponse.json(results.map((r) => r.data));
}
