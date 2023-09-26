import styled from '@emotion/styled'
import { Paper } from '@mui/material'

const Headerr = styled.header`
  display: grid;
  height: 54px;
  top: 0;
  width: 100vw;
  grid-area: header
`

export const Header = () => (
  <Headerr>
    <Paper square>Logo</Paper>
  </Headerr>
)