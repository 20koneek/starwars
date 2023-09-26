export type ListQuery<T> = {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}

export type Person = {
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string //url
  films: string[] // urls
  species: []
  vehicles: string[] // urls
  starships: string[] // urls
  created: string
  edited: string
  url: string // url
}
