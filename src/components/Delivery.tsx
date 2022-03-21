import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Card, SxProps } from '@mui/material';

export default function SelectAutoWidth() {
    const [delivery, setAge] = React.useState('');
  
    const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
      setAge(event.target.value);
    };
  
    return (
      <Card sx={cardStyle}>
        <FormControl sx={{ m: 1, minWidth: 150, marginTop: '10rem' }}>
          <InputLabel id="demo-simple-select-autowidth-label">Delivery</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={delivery}
            onChange={handleChange}
            autoWidth
            label="Age"
          >
            <MenuItem value={10}>Standard</MenuItem>
            <MenuItem value={21}>Express</MenuItem>
            <MenuItem value={22}>Pick up at store</MenuItem>
          </Select>
        </FormControl>
        </Card>
    );
  }

  const cardStyle: SxProps = {
        maxWidth: '60rem',
        margin: 'auto',
        marginTop: '15rem',
        paddingBottom: '2rem'
  }