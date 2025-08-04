// app/api/hero/[id]/route.ts
export const dynamic = 'force-dynamic';

import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params; 

    if (!id || isNaN(Number(id))) {
      return NextResponse.json(
        { error: 'ID de herói inválido' },
        { status: 400 }
      );
    }

    const token = process.env.SUPERHERO_API_TOKEN;
    if (!token) {
      return NextResponse.json(
        { error: 'Token da API não configurado' },
        { status: 500 }
      );
    }

    const response = await fetch(`https://superheroapi.com/api/${token}/${id}`);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Herói não encontrado' },
        { status: 404 }
      );
    }

    const hero = await response.json();

    return NextResponse.json(hero, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=30',
      },
    });
  } catch (error) {
    console.error('Erro na rota /api/hero/[id]:', error);
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    );
  }
}