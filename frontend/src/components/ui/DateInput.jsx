import React from 'react';
import PropTypes from 'prop-types';
import { DatePicker } from '@material-ui/pickers';

const DateInput = ({ value, handleChange }) => {
  return (
    <DatePicker
      format="do MMM yyyy"
      variant="inline"
      label="Date"
      autoOk
      disablePast
      inputVariant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
};

DateInput.propTypes = {
  value: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default DateInput;
