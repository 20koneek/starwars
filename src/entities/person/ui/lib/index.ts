import { UpdatedPerson } from '../../model/type'

export const PersonKeyNameMapping: { [key in keyof UpdatedPerson]: string } = {
  name: 'Name',
  height: 'Height',
  mass: 'Mass',
  hair_color: 'Hair color',
  skin_color: 'Skin color',
  eye_color: 'Eye color',
  birth_year: 'Birth year',
  gender: 'Gender',
} as const