import React, { Suspense } from 'react'
import { Await, useLoaderData } from 'react-router-dom'
import { Box, Button, Card, CardActions, CardContent, Typography } from '@mui/material'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export const PeoplePage = () => {
  const { data } = useLoaderData() as { data: object }
  console.log(data)

  return (
    <div>
      <h1>book.title</h1>
      <p>book.description</p>
      <Suspense fallback={<div>loading...</div>}>
        <Await
          resolve={data}
          errorElement={
            <div>Could not load reviews 😬</div>
          }
          children={(resolvedReviews) => (
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Word of the Day
                </Typography>

                <Typography variant="h5" component="div">
                  be{bull}nev{bull}o{bull}lent
                </Typography>

                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  adjective
                </Typography>

                <Typography variant="body2">
                  well meaning and kindly.
                  <br />
                  {'"a benevolent smile"'}
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          )}
        />
      </Suspense>
    </div>
  )
  // return(
  //   <Container maxWidth="sm">
  //     <Box sx={{ my: 4 }}>
  //       <Typography variant="h4" component="h1" gutterBottom>
  //         Material UI Create React App example in TypeScript
  //       </Typography>
  //     </Box>
  //   </Container>
  // )
}

