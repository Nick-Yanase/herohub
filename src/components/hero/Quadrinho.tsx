import { Hero } from "@/types/Hero"
import Image from "next/image"

interface QuadrinhoProps {
  hero: Hero
}

export default function Quadrinho(props: QuadrinhoProps) {
  return (
     <div className='flex flex-col items-start gap-3 w-32'>
        <Image
          src={props.hero.image.url}
          alt={'imagem do HQ'}
          width={100}
          height={200}
          className='object-cover '
        />
        <p className='text-silver-50 font-semibold'>Quadrinho do {props.hero.name}</p>
      </div>
  )
}
