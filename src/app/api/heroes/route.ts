// app/api/heroes/route.ts
import { NextResponse } from 'next/server';
import { Hero } from '@/types/Hero';

export async function GET() {

  const token = process.env.SUPERHERO_API_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'API token not configured' }, { status: 500 });
  }

  try {
    const requests = Array.from({ length: 20 }, (_, i) =>
      fetch(`https://superheroapi.com/api/${token}/${i + 1}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'force-cache',
        next: {
          revalidate: 60,
        },
      })
    );

    const responses = await Promise.all(requests);
    const heroes: Hero[] = await Promise.all(
      responses.map(async (res) => {
        if (!res.ok) throw new Error(`Failed to fetch hero: ${res.status}`);
        return res.json();
      })
    );

    return NextResponse.json(heroes, {
      headers: {
        'Cache-Control': 'public, max-age=600, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar heróis:', error);
    return NextResponse.json({ error: 'Failed to fetch heroes' }, { status: 500 });
  }
}