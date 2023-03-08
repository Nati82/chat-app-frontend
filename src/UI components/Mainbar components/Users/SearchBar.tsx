import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { SearchRounded } from '@mui/icons-material';
import { display } from '@mui/system';

export default function SearchBar() {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 }, display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchRounded />
            </InputAdornment>
          }
        />
      </FormControl>
    </Box>
  );
}