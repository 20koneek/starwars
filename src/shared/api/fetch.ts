const API_URL = 'https://swapi.dev'

export const getUrl = (path: string, page?: number): URL => (
  new URL(`api/${path}?${page ? `page=${page}` : ''}`, API_URL)
)