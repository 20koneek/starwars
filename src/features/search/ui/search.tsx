import { Button } from '@mui/material'
import { SubmitHandler, useForm } from 'react-hook-form'
import { SearchForm } from './search-form'
import { useQuerySearch } from '../../../shared/hooks/use-query-search'

type IFormInput = {
  search: string
}

export const Search = () => {
  const [search, setSearch] = useQuerySearch()
  const { control, handleSubmit, reset, register } = useForm<IFormInput>({
    defaultValues: {
      search,
    },
  })

  const onSubmit: SubmitHandler<IFormInput> = ({ search }) => {
    setSearch(search)
  }

  const onClear = () => {
    reset({ search: '' })
    setSearch('')
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <SearchForm
        control={control}
        onClear={onClear}
      />
      <Button type="submit">
        Search
      </Button>
    </form>
  )
}