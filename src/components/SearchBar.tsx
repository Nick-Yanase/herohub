import Image from "next/image";

interface SearchBarProps {
  className: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  return (
    <div className={`flex gap-6 items-center justify-start bg-secondary rounded-full ${className}`}>
      <Image src={"/img/icons/Search.svg"} alt="lupa" width={20} height={20} />
      <input type="text"  className="w-full no-underline outline-none text-primary " placeholder="Procure por heróis"/>
    </div>
  )
}
