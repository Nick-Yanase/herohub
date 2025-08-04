import Footer from "./Footer";
import Header from "./Header";

export type StylePage = "home" | "heroDetail"

export interface TemplateProps {
  children: React.ReactNode;
  stylePage: StylePage
  className?: string;
}

export default function Template(props: TemplateProps) {
  return (
    <>
      <Header stylePage={props.stylePage} />
      <main className={`w-full flex flex-col items-center justify-center pt-4 pb-10 ${props.className} ${props.stylePage === "home" ? "bg-white": "bg-terciary"}  `}>
        {props.children}
      </main>
      <Footer />
    </>

  )
}
