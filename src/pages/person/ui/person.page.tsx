import { Suspense } from 'react'
import { Card, CardContent, LinearProgress } from '@mui/material'
import { PersonCard } from '../../../entities/person'

export const PersonPage = () => (
  <Card sx={{ maxWidth: 600 }}>
    <Suspense
      fallback={
        <CardContent>
          <LinearProgress/>
        </CardContent>
      }
    >
      <PersonCard/>
    </Suspense>
  </Card>
)
