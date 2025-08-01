'use client'
import Image from "next/image";
import SearchBar from "./components/SearchBar";
import Template from "./components/template/Template";

export default function HomePage() {
  return (
    <Template headerVer="home">
      <section className="w-full max-w-7xl flex flex-col items-center justify-center gap-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-4xl text-silver-50 font-bold">Explore o universo</h1>
          <p className="text-silver-40 ">Mergulhe no domínio deslubrante de todos os persongaens que você ama - e aqueles que você decobrirá em breve!</p>
        </div>

        <SearchBar className="w-[1000px] p-4" />

        <div className="w-full flex items-center justify-between gap-4 mt-10">
          <p className="text-xl font-medium text-silver-30">Encontrados 20 heróis</p>

          <div className="flex gap-10 items-center">
            <button onClick={() => {}} className="flex gap-4 cursor-pointer">
              <Image 
                src="/img/icons/Hero.svg" 
                alt="icone de herói" 
                width={20} 
                height={20} 
              />
              <p className="text-primary">Ordenar por nome - A/Z</p>
            </button >
            
            <button onClick={() => {}} className="cursor-pointer">
              <Image
                src="/img/ToggleDisable.svg"
                alt="icone de deativado"
                width={60}
                height={40}
              />
            </button>

            <button onClick={() => {}} className="flex gap-4 cursor-pointer">
              <Image 
                src="/img/icons/HeartFilled.svg" 
                alt="icone coração preenchido" 
                width={20} 
                height={20} 
              />

              <p className="text-primary">Somente favoritas</p>
            </button>
          </div>
        </div>

        <div className="w-full grid grid-cols-4 gap-10">
          {/* Placeholder for hero cards */}
          <div className="flex flex-col items-center justify-center h-[300px]">
            <div className="relative size-full">
              <Image
                src="/img/hero-example.png"
                alt="Hero Placeholder"
                fill
                className=" object-cover"
              />
            </div>
            <div className="border-t-6 border-primary pt-2 w-full flex justify-between items-center">
              <h2 className="text-silver-50 text-lg font-bold mt-2">Star-lord</h2>
              <button onClick={() => {}} className="flex gap-4 cursor-pointer">
                <Image
                  src="/img/icons/HeartNotFilled.svg"
                  alt="icone coração não preenchido"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-[300px]">
            <div className="relative size-full">
              <Image
                src="/img/hero-example.png"
                alt="Hero Placeholder"
                fill
                className=" object-cover"
              />
            </div>
            <div className="border-t-6 border-primary pt-2 w-full flex justify-between items-center">
              <h2 className="text-silver-50 text-lg font-bold mt-2">Star-lord</h2>
              <button onClick={() => {}} className="flex gap-4 cursor-pointer">
                <Image
                  src="/img/icons/HeartNotFilled.svg"
                  alt="icone coração não preenchido"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-[300px]">
            <div className="relative size-full">
              <Image
                src="/img/hero-example.png"
                alt="Hero Placeholder"
                fill
                className=" object-cover"
              />
            </div>
            <div className="border-t-6 border-primary pt-2 w-full flex justify-between items-center">
              <h2 className="text-silver-50 text-lg font-bold mt-2">Star-lord</h2>
              <button onClick={() => {}} className="flex gap-4 cursor-pointer">
                <Image
                  src="/img/icons/HeartNotFilled.svg"
                  alt="icone coração não preenchido"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-[300px]">
            <div className="relative size-full">
              <Image
                src="/img/hero-example.png"
                alt="Hero Placeholder"
                fill
                className=" object-cover"
              />
            </div>
            <div className="border-t-6 border-primary pt-2 w-full flex justify-between items-center">
              <h2 className="text-silver-50 text-lg font-bold mt-2">Star-lord</h2>
              <button onClick={() => {}} className="flex gap-4 cursor-pointer">
                <Image
                  src="/img/icons/HeartNotFilled.svg"
                  alt="icone coração não preenchido"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>

        </div>

      </section>
    </Template>

  )
}
