import { Hero } from "@/types/Hero"
import Image from "next/image";

interface HeroCardProps {
  hero: Hero
}
export default function InfoHero(props : HeroCardProps) {
  const { hero } = props;
  return (
     <article className="w-[450px] flex flex-col gap-5 z-10">
          <div className="w-full flex items-center justify-between gap-4">
            <h1 className="text-4xl text-silver-50 font-bold">{hero.name}</h1>
            <Image
              src="/img/icons/HeartNotFilled.svg"
              alt="icone coração não preenchido"
              width={20}
              height={20}
            />
          </div>

          <p className='text-silver-40'>O(a) personagem {hero.name} é {hero.appearance.gender === "Male" ? "homem" : "mulher"} e {hero.appearance.race === "null" ? "não possui uma raça definida" : hero.appearance.race}. Sua primeira aparição foi em {hero.biography['first-appearance']} e vem do universo do(a) {hero.biography.publisher}.</p>

          <div className='w-full flex flex-col justify-start items-start gap-4'>
            <p className='font-semibold text-silver-50'>Habilidades:</p>
            <ul className='list-disc pl-5 text-silver-40'>
              {hero.powerstats && Object.entries(hero.powerstats).map(([key, value]) => (
                <li key={key} className='capitalize'>{key}: {value}</li>
              ))}
            </ul>
          </div>

          <div className='w-full flex justify-start gap-20'>

            <div className='flex flex-col gap-2'>
              <p className='font-semibold text-silver-50'>Quadrinhos</p>
              <div className='flex gap-4 items-center'>
                <Image
                  src={"/img/icons/Book.svg"}
                  alt={`Icone de livro`}
                  width={30}
                  height={20}
                  className="object-cover"
                />
                <p className='text-silver-50 font-medium'>3.000</p>
              </div>
            </div>

            <div className='flex flex-col gap-2 '>
              <p className='font-semibold text-silver-50'>Filmes</p>
              <div className='flex gap-4 items-center'>
                <Image
                  src={"/img/icons/Video.svg"}
                  alt={`Icone de livro`}
                  width={30}
                  height={20}
                  className="object-cover"
                />
                <p className='text-silver-50 font-medium'>40</p>
              </div>
            </div>

          </div>

          <div className='w-full flex justify-start items-center gap-4'>
            <p className='font-semibold text-silver-50'>Rating:</p>
            <Image
              src={"/img/icons/ReviewStar.svg"}
              alt={`Icone de livro`}
              width={80}
              height={40}
              className="object-cover"
            />
          </div>
          <p className='text-silver-50'><span className='font-semibold'>Ultimo quadrinho:</span> 13 fev. 2020</p>
        </article>
  )
}
