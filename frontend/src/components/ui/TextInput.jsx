import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const TextInput = ({ value, handleChange }) => {
  return (
    <TextField
      className="col-span-2"
      label="Todo Title"
      variant="outlined"
      value={value}
      placeholder={`How about "Cooking dinner" ?`}
      onChange={(e) => handleChange(e.target.value)}
    />
  );
};

TextInput.propTypes = {
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

export default TextInput;
