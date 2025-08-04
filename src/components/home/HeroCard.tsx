import { useFavoriteStore } from "@/store/favoriteStore";
import { Hero } from "@/types/Hero";
import Image from "next/image";
import Link from "next/link";
interface HeroCardProps {
  hero: Hero
}
export default function HeroCard({hero}: HeroCardProps) {
  
  const { addFavorite, removeFavorite, isFavorite } = useFavoriteStore()

  const favorited = isFavorite(Number(hero.id));

   const toggleFavorite = () => {
    if (favorited) {
      removeFavorite(Number(hero.id));
    } else {
      addFavorite(hero);
    }
  };
  return (
    <div className="flex flex-col items-center justify-center h-[300px] ">
      <Link href={`/hero/${hero.id}`} className="relative h-[250px] w-[250px] overflow-hidden">
        <Image
          src={hero.image.url}
          alt={`Imagem do herói ${hero.name}`  }
          fill
          className="object-cover cursor-pointer transition-all duration-300 hover:scale-110"
        />
      </Link >
      <div className="border-t-6 border-primary pt-2 w-full flex justify-between items-center">
        <h2 className="text-silver-50 text-lg font-bold mt-2">{hero.name}</h2>
        <button onClick={toggleFavorite} className="flex gap-4 cursor-pointer">
          <Image
            src={favorited ? "/img/icons/HeartFilled.svg" : "/img/icons/HeartNotFilled.svg"}
            alt="Favoritar"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  )
}
