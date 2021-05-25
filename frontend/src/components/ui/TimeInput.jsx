import React from 'react';
import PropTypes from 'prop-types';
import { TimePicker } from '@material-ui/pickers';

const TimeInput = ({ value, handleChange }) => {
  return (
    <TimePicker
      variant="inline"
      label="Time"
      autoOk
      disablePast
      inputVariant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
};

TimeInput.propTypes = {
  value: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
};

export default TimeInput;
