import { NextResponse } from "next/server";

export async function GET(id: string){
  const token = process.env.SUPERHERO_API_TOKEN;

  if (!token) {
    return NextResponse.json({ error: 'API token not configured' }, { status: 500 });
  } 

  try {
    const request = await fetch(`https://superheroapi.com/api/${token}/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'force-cache',
        next: {
          revalidate: 60,
        },
      })
    const hero = await request.json();

    return NextResponse.json(hero, {
      headers: {
        'Cache-Control': 'public, max-age=600, stale-while-revalidate=300',
      },
    });

  } catch (error) {
    console.error('Erro ao buscar herói:', error);
    return NextResponse.json({ error: 'Failed to fetch hero' }, { status: 500 });
  }
}