import type { Person } from '../../../../shared/api'
import { PersonKeyNameMapping } from '../lib'
import { UpdatedPerson } from '../../model/type'
import { Box, Button, FormControl, Input, InputLabel } from '@mui/material'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'

const mappingKeys = Object.keys(PersonKeyNameMapping) as (keyof UpdatedPerson)[]

type Props = {
  readOnly: boolean
  person: Person
  onSubmit: SubmitHandler<UpdatedPerson>
}

export const PersonForm = ({ person, onSubmit, readOnly }: Props) => {
  const { control, handleSubmit, reset } = useForm<UpdatedPerson>({
    defaultValues: person,
  })

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr' }}>
        {mappingKeys.map((key) => (
          <Controller
            key={key}
            name={key}
            control={control}
            render={({ field }) => (
              <FormControl variant="standard">
                <InputLabel shrink htmlFor={key}>
                  {PersonKeyNameMapping[key]}
                </InputLabel>
                <Input
                  {...field}
                  id={key}
                  type="text"
                  readOnly={readOnly}
                />
              </FormControl>
            )}
          />
        ))}
      </Box>

      {!readOnly && (
        <Button
          sx={{ marginTop: 2 }}
          type="submit"
        >
          Save
        </Button>
      )}
    </form>
  )
}