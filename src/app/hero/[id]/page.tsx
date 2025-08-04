"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Hero } from "@/types/Hero";
import Template from "@/components/template/Template";
import InfoHero from "@/components/hero/InfoHero";
import ImageHero from "@/components/hero/ImageHero";
import Quadrinho from "@/components/hero/Quadrinho";
import { useLoading } from "../../../context/LoadingContext";
import LoadingBar from "@/components/LoadingBar";

export default function HeroDetail() {
  const { id } = useParams();
  const [hero, setHero] = useState<Hero>();
  const [error, setError] = useState<string | null>(null);
  const { loading, setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    console.log("Fetching hero with ID:", id);
    if (!id || isNaN(Number(id as string))) {
      setError("ID inválido");
      return;
    }
    fetch(`/api/hero/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setHero(data);
      })
      .catch((err) => {
        console.error("Erro ao carregar herói:", err);
        setError("Erro ao carregar herói");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!hero) {
    return (
      <Template stylePage="heroDetail">
        {" "}
        <LoadingBar />
      </Template>
    );
  }
  return (
    <Template stylePage="heroDetail">
      {loading && <LoadingBar />}
      <section className="w-full max-w-7xl flex flex-col items-center justify-center gap-8 px-5 relative mt-6">
        <span
          className="absolute inset-0 max-w-[90%] z-0 flex items-start justify-end -top-8
             text-[min(20vw,150px)] leading-none 
             text-white/90 font-extrabold uppercase 
             break-words text-right pointer-events-none select-none"
        >
          {hero.name}
        </span>
        <div className="w-full flex justify-between items-center gap-8">
          <InfoHero hero={hero} />
          <ImageHero hero={hero} />
        </div>

        <div className="w-full flex flex-col items-start gap-10 mt-12">
          <h2 className="text-xl text-silver-50 font-bold">
            Ultimos lançamentos
          </h2>
          <div className="w-full flex flex-wrap gap-8 justify-start">
            {Array.from({ length: 10 }).map((_, index) => (
              <Quadrinho key={`quadrinho-${index}`} hero={hero} />
            ))}
          </div>
        </div>
      </section>
    </Template>
  );
}
