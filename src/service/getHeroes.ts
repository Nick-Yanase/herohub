// src/services/getHeroes.ts
import api from './api'
import { Hero } from '@/types/Hero'

export async function getFirstHeroes(): Promise<Hero[]> {
  const requests = []

  for (let id = 1; id <= 20; id++) {
    requests.push(api.get<Hero>(`/${id}`))
  }

  const responses = await Promise.all(requests)
  return responses.map(res => res.data)
}
