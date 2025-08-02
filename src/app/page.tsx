'use client'
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import Template from "../components/template/Template";
import HeroCard from "../components/HeroCard";
import { useEffect, useState } from "react";
import { Hero } from "@/types/Hero";

export default function HomePage() {

  const [heroes, setHeroes] = useState<Hero[]>([])
  const [sortedHeroes, setSortedHeroes] = useState<Hero[]>([])
  const [isOrderName, setIsOrderName] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true) 

  useEffect(() => {
    setLoading(true)
    fetch('/api/heroes')
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data)
        setSortedHeroes(data)
      })
      .catch((err) => {
        console.error('Erro ao carregar heróis:', err)
        setHeroes([])
        setSortedHeroes([])
      })
      .finally(() => {
        setLoading(false) // Sempre esconde o loading
      })
  }, [])

  useEffect(() => {
    const ordered = [...heroes].sort((a, b) =>
      isOrderName
        ? b.name.localeCompare(a.name) // Z → A
        : a.name.localeCompare(b.name) // A → Z
    )
    setSortedHeroes(ordered)
  }, [isOrderName, heroes])

  const toggleOrderName = () => {
    setIsOrderName(!isOrderName)
  }

  return (
    <Template headerVer="home">
      {loading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-transparent overflow-hidden z-50">
          <div className="h-full w-full bg-primary animate-pulse-loading"></div>
        </div>
      )}
      <section className="w-full max-w-7xl flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-4xl text-silver-50 font-bold">Explore o universo</h1>
          <p className="text-silver-40 ">Mergulhe no domínio deslubrante de todos os persongaens que você ama - e aqueles que você decobrirá em breve!</p>
        </div>

        <SearchBar className="w-[1000px] p-4" />

        <div className="w-full flex items-center justify-between gap-4 mt-10">
          <p className="text-xl font-medium text-silver-30">Encontrados {heroes.length} heróis</p>

          <div className="flex gap-20 items-center">
            <div className="flex gap-4 items-center">
              <div className="flex gap-4">
                <Image
                  src="/img/icons/Hero.svg"
                  alt="icone de herói"
                  width={20}
                  height={20}
                />
                <p className="text-primary">Ordenar por nome - A/Z</p>
              </div >
              
              <button onClick={toggleOrderName} className="cursor-pointer w-[60px] h-[40px] flex items-center justify-center">
                {
                  isOrderName === false ?
                  <Image
                    src="/img/ToggleDisable.svg"
                    alt="icone de desativado"
                    width={60}
                    height={40}
                  />
                  :
                  <Image
                    src="/img/ToggleActive.svg"
                    alt="icone de ativado"
                    width={60}
                    height={40}
                  />
                }
              </button>
            </div>
            
            <button onClick={() => {}} className="flex gap-4 cursor-pointer ">
              <Image 
                src="/img/icons/HeartFilled.svg" 
                alt="icone coração preenchido" 
                width={20} 
                height={20} 
              />

              <p className="text-primary hover:text-primary/70 transition-colors duration-300">Somente favoritas</p>
            </button>
          </div>
        </div>

        <div className="w-full justify-items-center grid grid-cols-4 gap-10">
          {
            sortedHeroes.map((hero) => (
              <HeroCard 
                heroId={hero.id}
                heroName={hero.name}
                heroImage={hero.image.url}
                key={hero.id}
              />
            ))
          }
        </div>
      </section>
    </Template>
  )
}
