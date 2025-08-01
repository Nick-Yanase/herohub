import Footer from "./Footer";
import Header, { HeaderVersion } from "./Header";

export interface TemplateProps {
  children: React.ReactNode;
  headerVer: HeaderVersion
  className?: string;
}

export default function Template(props: TemplateProps) {
  return (
    <>
      <Header version={props.headerVer} />
      <main className="w-full flex flex-col items-center justify-center mt-4 mb-10">
        {props.children}
      </main>
      <Footer />
    </>

  )
}
