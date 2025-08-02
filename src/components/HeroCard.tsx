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
    <div className="flex flex-col items-center justify-center h-[300px] ">
      <Link href={`/hero/${heroId}`} className="relative h-[250px] w-[250px] overflow-hidden">
        <Image
          src={heroImage}
          alt={`Imagem do herói ${heroName}`  }
          fill
          className="object-cover cursor-pointer transition-all duration-300 hover:scale-110"
        />
      </Link >
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
  )
}
