import Image from "next/image";
import Link from "next/link";
interface HeroCardProps {
  heroId: string;
  heroName: string;
  heroImage: string;
  favorite?: () => void; //oinde colocar essa função, com zustand?
}
export default function HeroCard(heroProps: HeroCardProps) {
  const { heroId, heroName, heroImage, favorite } = heroProps;
  return (
    <Link href={`/hero/${heroId}`} className="size-fit">
      <div className="flex flex-col items-center justify-center h-[300px] hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
        <div className="relative size-full">
          <Image
            src={heroImage}
            alt={`Imagem do herói ${heroName}`  }
            fill
            className="object-cover"
          />
        </div>
        <div className="border-t-6 border-primary pt-2 w-full flex justify-between items-center">
          <h2 className="text-silver-50 text-lg font-bold mt-2">{heroName}</h2>
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
    </Link>
  )
}
