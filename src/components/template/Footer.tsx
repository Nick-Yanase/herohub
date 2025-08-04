import { IconBrandGithubFilled,  IconBrandLinkedinFilled } from "@tabler/icons-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary w-full h-28 flex items-center justify-center">
      <nav className="w-full px-5 max-w-7xl flex items-center justify-between">
        <p className="text-lg text-white">Desenvolvido por Nicolas Yanase</p>
        <div className="flex gap-6 text-white">
          <Link href={"https://github.com/Nick-Yanase"}>
            <IconBrandGithubFilled />
          </Link>
          <Link href={"https://www.linkedin.com/in/nicolas-yanase"}>
            <IconBrandLinkedinFilled />
          </Link>
        </div>
      </nav>
    </footer>
  )
}
