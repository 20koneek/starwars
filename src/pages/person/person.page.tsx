import { Suspense } from 'react'
import { Await } from 'react-router-dom'

export const PersonPage = () => {
  return (
    <div>
      <h1>book.title</h1>
      <p>book.description</p>
      <Suspense fallback={<div>loading...</div>}>
        <Await
          resolve={Promise.resolve()}
          errorElement={
            <div>Could not load reviews 😬</div>
          }
          children={(resolvedReviews) => (
            <div>{resolvedReviews}</div>
          )}
        />
      </Suspense>
    </div>
  )
}