import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const SelectDate = ({ filter, setFilter }) => {
  const handleChange = event => {
    const newStatus = event.target.value;
    setFilter(newStatus);
  };

  return (
    <Box sx={{ minWidth: 150, width: 150 }}>
      <FormControl fullWidth>
        <InputLabel>Date</InputLabel>

        <Select value={filter} label="Date" onChange={handleChange}>
          <MenuItem value={'oldest'}>oldest</MenuItem>
          <MenuItem value={'newest'}>newest</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
