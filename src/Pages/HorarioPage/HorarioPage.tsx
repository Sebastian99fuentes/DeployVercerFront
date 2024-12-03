import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, StaticTimePicker, TimePicker } from '@mui/x-date-pickers';
import TextField from '@mui/material/TextField';

interface Props {}

const HorarioPage = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);



  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker label="Basic date picker" />

         
               <TimePicker label="Basic date picker" />
        
          </LocalizationProvider>
  );
};

export default HorarioPage;
