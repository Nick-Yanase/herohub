
import Template from '@/components/template/Template'
import { Hero } from '@/types/Hero'
import Image from 'next/image'
import React from 'react'

export default async function HeroDetail({params}: {params: Promise<{id: string}>}) {

  const { id } = await params
  const heroId = parseInt(id as string, 10)

  if (isNaN(heroId)) {
    return new Response('ID inválido', { status: 400 })
  }
  
  const response = await fetch(`/api/heroes/${heroId}`, {
    next: {
      revalidate: 60, // Revalida a cada 60 segundos
    },
  })
  const hero: Hero = await response.json()

  return (
    <Template headerVer='charDetail' >
      <section className="w-full max-w-7xl flex flex-col items-center justify-between gap-8 px-5">
        <article className='w-96 flex flex-col '>
          <div className='flex items-center justify-between gap-4'>
            <h1 className="text-4xl text-silver-50 font-bold">{hero.name}</h1>
            <Image src={"/img/icons/HeartFilled.svg"} alt="Coração preenchido"/>
          </div>
          <p>{hero.biography.alignment}</p>
        </article>

      </section>
    </Template>
  )
}
