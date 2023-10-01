import { atom } from 'recoil'
import { UpdatedPerson } from './type'

type UpdatedPersonsAtomValue = {
  [key in string]: UpdatedPerson
}

export const updatedPersonsState = atom<UpdatedPersonsAtomValue>({
  key: 'UpdatedPersonsAtom',
  default: {},
});
