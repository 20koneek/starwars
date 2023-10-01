import styled from '@emotion/styled'
import { Paper, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Layout = styled.header`
  display: grid;
  height: 54px;
  top: 0;
  width: 100vw;
  grid-area: header
`

export const Header = () => {
  const navigate = useNavigate()

  return (
    <Layout>
      <Paper square sx={{ display: 'flex', alignItems: 'center', paddingLeft: 2 }}>
        <Typography
          sx={{ cursor: 'pointer' }}
          variant="h4"
          onClick={() => navigate('/')}
        >
          StarWars
        </Typography>
      </Paper>
    </Layout>
  )
}