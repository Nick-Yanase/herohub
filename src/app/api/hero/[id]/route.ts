import { NextResponse } from 'next/server';
import { Hero } from '@/types/Hero';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  if (!params || !params.id) {
    return NextResponse.json(
      { error: 'Missing hero ID' },
      { status: 400 }
    );
  }

  const { id } = params; 

  // Validação do ID
  if (!id || isNaN(Number(id))) {
    return NextResponse.json(
      { error: 'Invalid hero ID' },
      { status: 400 }
    );
  }

  const token = process.env.SUPERHERO_API_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: 'API token not configured' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(`https://superheroapi.com/api/${token}/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 60, 
      },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'Hero not found' },
        { status: 404 }
      );
    }

    const hero: Hero = await res.json();

    return NextResponse.json(hero, {
      headers: {
        'Cache-Control': 'public, max-age=600, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error fetching hero:', error);
    return NextResponse.json(
      { error: 'Failed to fetch hero' },
      { status: 500 }
    );
  }
}