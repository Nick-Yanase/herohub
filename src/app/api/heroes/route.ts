// app/api/heroes/route.ts
import { NextResponse } from 'next/server';
import { Hero } from '@/types/Hero';

export async function GET() {
  const token = process.env.SUPERHERO_API_TOKEN;
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  if (!token) {
    return NextResponse.json({ error: 'API token not configured' }, { status: 500 });
  }

  try {
    
    const maxRequests = 5; 
    const heroIds = Array.from({ length: 60 }, (_, i) => i + 30);
    const heroes: Hero[] = [];

    for (let i = 0; i < heroIds.length; i += maxRequests) {
      const chunk = heroIds.slice(i, i + maxRequests);
      const responses = await Promise.all(
        chunk.map(id =>
          fetch(`https://superheroapi.com/api/${token}/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'force-cache',
            next: {
              revalidate: 60,
            },
          })
        )
      );

      const chunkHeroes = await Promise.all(
        responses.map(async (res) => {
          if (!res.ok) throw new Error(`Failed to fetch hero: ${res.status}`);
          return res.json();
        })
      );

      heroes.push(...chunkHeroes);
      await sleep(300);
    }

    return NextResponse.json(heroes, {
      headers: {
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=30',
      },
    });
  } catch (error) {
    console.error('Erro ao buscar heróis:', error);
    return NextResponse.json({ error: 'Failed to fetch heroes' }, { status: 500 });
  }
}
