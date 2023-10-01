import { usePerson } from '../../api/use-person'
import { useRecoilState } from 'recoil'
import { updatedPersonsState } from '../../model/updated-persons.state'
import { SubmitHandler } from 'react-hook-form'
import { UpdatedPerson } from '../../model/type'
import { PersonForm } from '../person-form'
import { Button, CardContent, CardHeader } from '@mui/material'
import { useState } from 'react'

export const PersonCard = () => {
  const [readonly, setReadonly] = useState(true)
  const data = usePerson()
  const [, setUpdatedPersons] = useRecoilState(updatedPersonsState)

  const onSubmit: SubmitHandler<UpdatedPerson> = (updatedPerson) => {
    if (data) {
      setUpdatedPersons((prevState) => ({
        ...prevState,
        [data.url]: {
          originalName: prevState[data.url]?.originalName ?? data.name,
          value: {
            ...data,
            ...updatedPerson,
          },
        },
      }))
    }
    setReadonly(true)
  }

  return (
    <>
      <CardHeader title={data?.name}/>
      <CardContent>
        <PersonForm
          person={data}
          readOnly={readonly}
          onSubmit={onSubmit}
        />

        {readonly && (
          <Button
            sx={{ marginTop: 2 }}
            color="primary"
            onClick={() => setReadonly(false)}
          >
            Edit
          </Button>
        )}
      </CardContent>
    </>
  )
}
