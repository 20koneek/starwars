import { usePerson } from '../../api/use-person'
import { useRecoilState } from 'recoil'
import { updatedPersonsState } from '../../model/updated-persons.state'
import { SubmitHandler } from 'react-hook-form'
import { UpdatedPerson } from '../../model/type'
import { PersonForm } from '../person-form'
import { Button, CardActions, CardContent, CardHeader } from '@mui/material'

export const PersonCard = () => {
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
  }

  return (
    <>
      <CardHeader title={data?.name}/>
      <CardContent>
        <PersonForm
          person={data}
          readOnly={false}
          onSubmit={onSubmit}
        />
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </>
  )
}
