import React, { useState, useEffect, useCallback } from 'react';
import { TextField, MenuItem, FormControl, InputLabel, Select, InputAdornment, makeStyles } from '@material-ui/core';

import Iconify from './Iconify';

export default function EventSearch({ initialData, filterSearch }) {
  //For changing the event name
  const [title, setTitle] = useState('');
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  }
  
  //For changing the event type (spotlight vs seminar)
  const [type, setType] = useState('');
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    const search = () => {
      //filter out the data and set the appropriate values for results
      //logic to do the filtering, we will filter by title based on substring
      let filtered = initialData;
      console.log(filtered)

      if (!(type === '')) {
          filtered = filtered.filter((element) => element.type === type);
          console.log(filtered);
        }

      if (!(title === '')) {
          filtered = filtered.filter((element) => element.title.toLowerCase().startsWith(title.toLowerCase()));
      }

      filterSearch(filtered);
    };

    //if title is an empty string will not search, if it isnt it will search.
    if (title || type) {
      search();
    }else {
      filterSearch(initialData);
    }

  }, [title, type]);

  return (
      <div>
          <TextField
          label="Search for events"
          fullWidth
          variant="outlined" 
          value={title}
          onChange={handleTitleChange}
          style={{width:425, marginRight:25}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Iconify icon={'bi:search'} sx={{ mr: 0.5, width: 20, height: 20 }} />
              </InputAdornment>
            ),
          }}
          />
        <FormControl style={{width:150}} variant="outlined" >
          <InputLabel>Event Type</InputLabel>
          <Select value={type} onChange={handleTypeChange}>
            <MenuItem value={''}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={'seminar'}>Seminar</MenuItem>
            <MenuItem value={'spotlight'}>Spotlight</MenuItem>
          </Select>
        </FormControl>
      </div>
      
  );
}
