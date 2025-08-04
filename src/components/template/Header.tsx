import Logotipo from "./Logotipo";
import { StylePage } from "./Template";
import SearchBar from "../SearchBar";

export interface HeaderProps {
  stylePage?: StylePage;
}

export default function Header({stylePage}: HeaderProps) {
  return (
    <header className={`w-full flex items-center justify-center ${stylePage === 'home' ? "bg-white" : "bg-terciary"}`}>
      <nav className={`w-full h-24 max-w-7xl flex items-center ${stylePage === 'home' ? "justify-center" : "justify-start"}`}>
        {
          stylePage === "home" && (
            <Logotipo width={300} height={50} />
          )
        }
        {
          stylePage === "heroDetail" && (
            <div className="flex items-center gap-32 ">
              <Logotipo width={200} height={70} />
              <div className="w-[800px] ">
                <SearchBar stylePage={stylePage} />
              </div>
            </div>
          )
        }
      </nav>
    </header>
  )
}
