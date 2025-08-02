import Image from "next/image";
import Link from "next/link";

interface LogotipoProps {
  width?: number;
  height?: number;
}

export default function Logotipo({width, height}: LogotipoProps) {
  return (
    <Link href={"/"}>
      <Image 
        src={"/img/Logo.png"} 
        alt={"Logotipo"} 
        width={width} 
        height={height} 
        className="cursor-pointer"
      />
    </Link>
  )
}
