// src/types/hero.ts
export type Hero = {
  id: string
  name: string
  powerstats: {
    intelligence: string
    strength: string
    speed: string
    durability: string
    power: string
    combat: string
  }
  biography: {
    'full-name': string
    'place-of-birth': string
    'first-appearance': string
    publisher: string
    alignment: string
  }
  appearance: {
    gender: string
    race: string
    height: string[]
    weight: string[]
    eyeColor: string
    hairColor: string
  }
  work: {
    occupation: string
    base: string
  }
  connections: {
    'group-affiliation': string
    relatives: string
  }
  image: {
    url: string
  }
}
