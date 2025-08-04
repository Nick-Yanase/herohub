'use client'

import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Hero } from '@/types/Hero'
import { StylePage } from './template/Template'

interface SearchBarProps {
  stylePage: StylePage
  className?: string
}

export default function SearchBar({ className, stylePage }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [heroes, setHeroes] = useState<Hero[]>([])
  const [suggestions, setSuggestions] = useState<Hero[]>([])
  const containerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  // Carrega os heróis uma vez
  useEffect(() => {
    fetch('/api/heroes')
      .then((res) => res.json())
      .then((data) => setHeroes(data))
      .catch((err) => console.error('Erro ao carregar heróis:', err))
  }, [])

  // Atualiza sugestões quando o termo muda
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([])
      return
    }

    const filtered = heroes
      .filter((hero) =>
        hero.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .slice(0, 5)

    setSuggestions(filtered)
  }, [searchTerm, heroes])

  // Fecha sugestões ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Navega ao pressionar Enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && suggestions.length > 0) {
      router.push(`/hero/${suggestions[0].id}`)
      setShowSuggestions(false)
      setSearchTerm('')
    }
  }

  // Navega ao clicar na sugestão
  const handleSuggestionClick = (heroId: string) => {
    router.push(`/hero/${heroId}`)
    setShowSuggestions(false)
    setSearchTerm('')
  }

  return (
    <div ref={containerRef} className="relative w-full">
      <div className={`flex p-4 gap-6 items-center justify-start rounded-full ${className} ${stylePage === "home" ? "bg-secondary":"bg-white"}`}>
        <Image src="/img/icons/Search.svg" alt="lupa" width={20} height={20} />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
            if (e.target.value) setShowSuggestions(true)
          }}
          onKeyDown={handleKeyDown}
          placeholder="Procure por heróis"
          className={`w-full outline-none bg-transparent  placeholder:text-silver-40 ${stylePage === "home" ? "text-primary":"text-silver-40"}`}
          onFocus={() => searchTerm && setShowSuggestions(true)}
        />
      </div>

      {/* Lista de sugestões */}
      {showSuggestions && suggestions.length > 0 && (
        <ul className={`absolute top-full mt-2 w-full  rounded-lg shadow-lg z-40 max-h-60 overflow-y-auto ${stylePage === "home" ? "bg-secondary":"bg-white"}`}>
          {suggestions.map((hero) => (
            <li
              key={hero.id}
              className="flex items-center gap-3 p-3 hover:bg-silver-800 cursor-pointer transition-colors"
              onClick={() => handleSuggestionClick(hero.id)}
            >
              <Image
                src={hero.image.url}
                alt={hero.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-silver-50">{hero.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}