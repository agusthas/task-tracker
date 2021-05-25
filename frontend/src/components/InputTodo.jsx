import React, { useState } from 'react';
import { createMuiTheme, ThemeProvider, Button } from '@material-ui/core';
import { useGlobalContext } from '../context/context';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { InlineIcon } from '@iconify/react';
import plusIcon from '@iconify/icons-fa/plus';
import DateInput from './ui/DateInput';
import TimeInput from './ui/TimeInput';
import TextInput from './ui/TextInput';

const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#757de8',
    },
    secondary: {
      main: 'rgba(230,57,70,1)',
    },
  },
  typography: {
    fontFamily: ['"Segoe UI"'],
    fontSize: 15,
  },
});

const SubmitButton = () => {
  return (
    <Button
      className="w-1/4 h-3/4"
      type="submit"
      variant="contained"
      color="secondary"
      disableElevation
    >
      <InlineIcon icon={plusIcon} className="text-lg" />
    </Button>
  );
};

const InputTodo = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState(new Date());
  const { addTodo } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    const dueDate = date.toString();
    addTodo({ name, dueDate });
    setName('');
  };

  return (
    <form
      className="grid items-center grid-cols-6 gap-3"
      onSubmit={handleSubmit}
    >
      <ThemeProvider theme={darkTheme}>
        <TextInput value={name} handleChange={setName} />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateInput value={date} handleChange={setDate} />
          <TimeInput value={date} handleChange={setDate} />
        </MuiPickersUtilsProvider>
        <SubmitButton />
      </ThemeProvider>
    </form>
  );
};

export default InputTodo;
