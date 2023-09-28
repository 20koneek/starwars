import { useNavigate } from 'react-router-dom'
import { Avatar, Divider, ListItemAvatar, ListItemButton, ListItemText, Typography } from '@mui/material'
import type { Person } from '../../../../shared/api'

export const PersonComponent = ({ person }: { person: Person }) => {
  const navigate = useNavigate()

  return (
    <>
      <ListItemButton
        alignItems="flex-start"
        onClick={() => navigate(person.url.replace('https://swapi.dev/api', ''))}
      >
        <ListItemAvatar>
          <Avatar alt={person.name} src="#"/>
        </ListItemAvatar>

        <ListItemText
          primary={person.name}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {'Gender: '}
              </Typography>
              {person.gender}
              <br/>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {'Birth year: '}
              </Typography>
              {person.birth_year}
            </>
          }
        />
      </ListItemButton>
      <Divider/>
    </>
  )
}