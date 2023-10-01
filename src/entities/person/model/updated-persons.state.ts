import { atom } from 'recoil'
import { Person } from '../../../shared/api'

type UpdatedPersonsAtomValue = {
  [key in string]: {
    originalName: string
    value: Person
  }
}

export const updatedPersonsState = atom<UpdatedPersonsAtomValue>({
  key: 'UpdatedPersonsAtom',
  default: {},
})
