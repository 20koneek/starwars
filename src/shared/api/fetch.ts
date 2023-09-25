const baseUrl = 'https://swapi.dev'

export const getUrl = (path: string, page?: number): URL => (
  new URL(`api/${path}?${page ? `page=${page}` : ''}`, baseUrl)
)