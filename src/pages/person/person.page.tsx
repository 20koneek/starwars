import { Box, Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { usePerson } from '../../entities/person'
import * as React from 'react'
import { PersonKeyNameMapping } from '../../entities/person/ui/lib'

export const PersonPage = () => {
  const { peopleId } = useParams() as { peopleId: string }
  const { data, isLoading } = usePerson(peopleId)

  const mappingKeys = Object.keys(PersonKeyNameMapping)

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data?.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <Box sx={{ display: 'grid', gap: 2, gridTemplateColumns: '1fr 1fr' }}>
            {mappingKeys.map((key) => (
              <TextField
                key={key}
                id={key}
                // @ts-ignore
                label={PersonKeyNameMapping[key]}
                type={key}
                // @ts-ignore
                value={data?.[key]}
                variant="standard"
                // InputProps={{
                //   readOnly: true,
                // }}
              />
            ))}

          </Box>
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  )
}
