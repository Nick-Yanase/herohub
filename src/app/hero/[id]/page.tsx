'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Hero } from '@/types/Hero'
import Template from '@/components/template/Template'

export default function HeroDetail() {
  const { id } = useParams()
  const [hero, setHero] = useState<Hero | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    console.log('Fetching hero with ID:', id)
    if (!id || isNaN(Number(id as string))) {
      setError('ID inválido')
      return
    }

    const fetchHero = async () => {
      try {
        const res = await fetch(`/api/hero/${id}`)
        if (!res.ok) {
          setError('Erro ao carregar herói')
          return
        }
        const data: Hero = await res.json()
        setHero(data)
      } catch (err) {
        setError('Erro inesperado ao carregar dados')
      }
    }

    fetchHero()
  }, [id])

  if (error) return <div className="text-red-500">{error}</div>
  if (!hero) return <div className="text-silver-50">Carregando herói...</div>

  return (
    <Template headerVer="charDetail">
      <section className="w-full max-w-7xl flex flex-col items-center justify-between gap-8 px-5">
        <article className="w-96 flex flex-col">
          <div className="flex items-center justify-between gap-4">
            <h1 className="text-4xl text-silver-50 font-bold">{hero.name}</h1>
          </div>
          <p>{hero.biography.alignment}</p>
        </article>
      </section>
    </Template>
  )
}
