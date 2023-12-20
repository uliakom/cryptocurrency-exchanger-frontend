import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

export const SelectStatus = ({ status, setStatus, isAllVariant }) => {
  const handleChange = event => {
    const newStatus = event.target.value;
    setStatus(newStatus);
  };

  return (
    <Box sx={{ minWidth: 150, width: 150 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={status}
          label="Status"
          onChange={handleChange}
        >
          <MenuItem value={'pending'}>pending</MenuItem>
          <MenuItem value={'accepted'}>accepted</MenuItem>
          <MenuItem value={'rejected'}>rejected</MenuItem>
          {isAllVariant && <MenuItem value={'all'}>all</MenuItem>}
        </Select>
      </FormControl>
    </Box>
  );
};
