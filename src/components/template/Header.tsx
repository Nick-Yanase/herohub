import Logotipo from "./Logotipo";
import { StylePage } from "./Template";
import SearchBar from "../SearchBar";

export interface HeaderProps {
  stylePage?: StylePage;
}

export default function Header({stylePage}: HeaderProps) {
  return (
    <header className={`w-full flex items-center justify-center ${stylePage === 'home' ? "bg-white" : "bg-terciary"}`}>
      <nav className={`w-full h-24 max-w-7xl flex items-center px-5 ${stylePage === 'home' ? "justify-center  pt-10" : "justify-center lg:justify-start"}`}>
        {
          stylePage === "home" && (
            <Logotipo width={300} height={50} />
          )
        }
        {
          stylePage === "heroDetail" && (
            <div className="pt-12 flex flex-col md:pt-6 md:flex-row items-center gap-2 md:gap-20 lg:gap-32 ">
              <Logotipo width={200} height={70} />
              <div className="w-[330px] md:w-[600px] lg:w-[800px] ">
                <SearchBar stylePage={stylePage} />
              </div>
            </div>
          )
        }
      </nav>
    </header>
  )
}
