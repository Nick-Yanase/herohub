import Image from "next/image";
import Logotipo from "./Logotipo";

export type HeaderVersion = "home" | "charDetail"; 

export interface HeaderProps {
  version?: HeaderVersion ;
}

export default function Header({version}: HeaderProps) {
  return (
    <header className="w-full flex items-center justify-center">
      <nav className={`w-full py-4 max-w-7xl flex items-center ${version === 'home' ? "justify-center" : "justify-start"} `}>
        {version === "home" && (
          <Logotipo width={300} height={50} />
        )}

        {version === "charDetail" && (
          <div className="flex items-center gap-28">
            <Logotipo width={200} height={100} />
            <div className="flex gap-4 items-center justify-start w-96 bg-secondary rounded-2xl p-2">
              <Image src={"/img/icons/Search.svg"} alt="lupa" width={16} height={16} />
              <input type="text" className=""/>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
