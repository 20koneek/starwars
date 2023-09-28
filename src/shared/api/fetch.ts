const API_URL = 'https://swapi.dev'

type GetUrlParams = {
  path: string
  page?: number
  search?: string
}

export const getUrl = ({ path, page }: GetUrlParams): URL => (
  new URL(`api/${path}?${page ? `page=${page}` : ''}`, API_URL)
)