const API_URL = 'https://swapi.dev'

type GetUrlParams = {
  path: string
  query?: string
}

export const getUrl = ({ path, query }: GetUrlParams): URL => (
  new URL(`api/${path}?${query ?? ''}`, API_URL)
)