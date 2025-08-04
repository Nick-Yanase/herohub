import { Hero } from "@/types/Hero"
import Image from "next/image"

interface ImageProps {
  hero: Hero
}
export default function ImageHero(props: ImageProps ) {
  const { hero } = props
  return (
    <article className='w-full lg:h-[300px] xl:h-[500px] md:pt-32 flex items-center justify-center'>
      <div className='relative w-[400px] h-[500px]'>
        <Image
          src={hero.image.url}
          alt={`Imagem do herói ${hero.name}`}
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </article>
  )
}
