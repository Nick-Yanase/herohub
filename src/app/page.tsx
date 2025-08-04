"use client";
import Image from "next/image";
import SearchBar from "../components/SearchBar";
import Template from "../components/template/Template";
import HeroCard from "../components/home/HeroCard";
import { useEffect, useState } from "react";
import { Hero } from "@/types/Hero";
import { useLoading } from "../context/LoadingContext";
import LoadingBar from "@/components/LoadingBar";
import Paginação from "@/components/home/Paginação";
import { useFavoriteStore } from "@/store/favoriteStore";
import { IconHeartOff } from "@tabler/icons-react";

export default function HomePage() {
  const [heroes, setHeroes] = useState<Hero[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const { favorites } = useFavoriteStore();

  const [isOrderName, setIsOrderName] = useState<boolean>(false);
  const { loading, setLoading } = useLoading();

  const itemsPerPage = 20;
  const [currentPage, setCurrentPage] = useState(1);

  const toggleOrderName = () => {
    setIsOrderName(!isOrderName);
  };

  // Resetar página ao mudar favoritos/todos
  useEffect(() => {
    setCurrentPage(1);
  }, [showFavorites]);

  // Carregamento dos heróis da API
  useEffect(() => {
    setLoading(true);
    fetch("/api/heroes")
      .then((res) => res.json())
      .then((data) => {
        setHeroes(data);
      })
      .catch((err) => {
        console.error("Erro ao carregar heróis:", err);
        setHeroes([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Função para ordenar lista por nome
  const getOrderedHeroes = (list: Hero[]) => {
    return [...list].sort((a, b) =>
      isOrderName
        ? b.name.localeCompare(a.name) // Z → A
        : a.name.localeCompare(b.name) // A → Z
    );
  };

  const baseList = showFavorites ? favorites : heroes;
  const orderedList = getOrderedHeroes(baseList);
  const totalPages = Math.ceil(orderedList.length / itemsPerPage);

  const paginatedHeroes = orderedList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (!heroes) {
    return (
      <Template stylePage="home">
        <LoadingBar />
      </Template>
    );
  }

  return (
    <Template stylePage="home">
      {loading && <LoadingBar />}
      <section className="w-full max-w-7xl flex flex-col items-center justify-center gap-8 mt-8">
        <div className="flex flex-col items-center justify-center text-center gap-4">
          <h1 className="text-4xl text-silver-50 font-bold">
            Explore o universo
          </h1>
          <p className="text-silver-40">
            Mergulhe no domínio deslubrante de todos os persongaens que você ama
            - e aqueles que você decobrirá em breve!
          </p>
        </div>

        <div>
          <SearchBar stylePage="home" className="w-[1000px] p-4" />
        </div>

        <div className="w-full flex items-center justify-between gap-4 mt-10">
          <p className="text-xl font-medium text-silver-30">
            Encontrados {orderedList.length} heróis
          </p>

          <div className="flex gap-20 items-center">
            <div className="flex gap-4 items-center">
              <div className="flex gap-4">
                <Image
                  src="/img/icons/Hero.svg"
                  alt="icone de herói"
                  width={20}
                  height={20}
                />
                <p className="text-primary">Ordenar por nome - A/Z</p>
              </div>

              <button
                onClick={toggleOrderName}
                className="cursor-pointer w-[60px] h-[40px] flex items-center justify-center"
              >
                {isOrderName ? (
                  <Image
                    src="/img/ToggleActive.svg"
                    alt="icone de ativado"
                    width={60}
                    height={40}
                  />
                ) : (
                  <Image
                    src="/img/ToggleDisable.svg"
                    alt="icone de desativado"
                    width={60}
                    height={40}
                  />
                )}
              </button>
            </div>

            <button
              onClick={() => setShowFavorites(!showFavorites)}
              className="flex gap-4 cursor-pointer"
            >
              <Image
                src="/img/icons/HeartFilled.svg"
                alt="icone coração preenchido"
                width={20}
                height={20}
              />
              <p className="text-primary hover:text-primary/70 transition-colors duration-300">
                {showFavorites ? "Mostrar todos" : "Somente favoritas"}
              </p>
            </button>
          </div>
        </div>

        {paginatedHeroes.length !== 0 ? (
          <div className="w-full justify-items-center grid grid-cols-4 gap-10">
            {paginatedHeroes.map((hero) => (
              <HeroCard hero={hero} key={hero.id} />
            ))}
          </div>
        ) : (
          <div className="w-full flex flex-col justify-center items-center my-4">
            <IconHeartOff size={200} className="text-silver-40" />
            <p className="text-silver-50 text-xl">
              Você ainda não favoritou nenhum persongaem, clique em{" "}
              <span className="font-semibold">Mostrar todos</span> para
              favortitar os seus heróis preferidos!
            </p>
          </div>
        )}

        <Paginação
          changePage={changePage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </section>
    </Template>
  );
}
