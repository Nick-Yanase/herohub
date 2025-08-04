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
    const jumpSize = 30;
    const totalHeroesToFetch = 60; 
    const heroes: Hero[] = [];
    let currentId = 1;

    while (heroes.length < totalHeroesToFetch) {

      const chunk = Array.from(
        { length: Math.min(maxRequests, totalHeroesToFetch - heroes.length) }, 
        (_, i) => currentId + i
      );

      const responses = await Promise.all(
        chunk.map(id =>
          fetch(`https://superheroapi.com/api/${token}/${id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
            cache: 'force-cache',
            next: { revalidate: 60 },
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
      
      currentId += jumpSize;
      
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