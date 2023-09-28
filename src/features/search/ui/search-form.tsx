import { IconButton, Input, InputAdornment } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import ClearIcon from '@mui/icons-material/Clear'
import { type Control, Controller } from 'react-hook-form'

type Props = {
  control: Control<{ search: string }>
  onClear: VoidFunction
}
export const SearchForm = ({ control, onClear }: Props) => (
  <Controller
    name="search"
    control={control}
    render={({ field }) => (
      <Input
        {...field}
        type="text"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon/>
          </InputAdornment>
        }
        endAdornment={
          <InputAdornment sx={{ width: '36px' }} position="end">
            {field.value && (
              <IconButton onClick={onClear}>
                <ClearIcon fontSize="small"/>
              </IconButton>
            )}
          </InputAdornment>
        }
      />
    )}
  />
)
