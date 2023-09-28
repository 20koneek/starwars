import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, FormControl, IconButton, Input, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { PaginationTable } from '../../../shared/ui'
import { PersonComponent, usePeople } from '../../../entities/person'

export const PeoplePage = () => {
  const [search, setSearch] = useState('')
  const { data, isLoading } = usePeople(search)

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log(search)
    }, 250)
    return () => clearTimeout(timeout)
  }, [search])

  // console.log({ data, isLoading })
  if (!data) return <div></div>

  return (
    <Card>
      <CardHeader
        title='People'
        action={
          <FormControl
            onChange={(e) => {
              // @ts-ignore
              setSearch(e.target.value)
            }}
            sx={{ m: 1, width: '25ch' }}
            variant="standard"
          >
            {/*<InputLabel htmlFor="standard-adornment-password">Search</InputLabel>*/}
            <Input
              value={search}
              id="standard-adornment-password"
              type="text"
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon/>
                </InputAdornment>
              }
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => setSearch('')}>
                    <ClearIcon fontSize="small"/>
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        }
      />

      <CardContent>
        <PaginationTable count={data.count}>
          {data.results.map((person) => (
            <PersonComponent
              key={person.url}
              person={person}
            />
          ))}
        </PaginationTable>
      </CardContent>
    </Card>
  )
}

