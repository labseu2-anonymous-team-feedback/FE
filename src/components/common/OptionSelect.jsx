import React from 'react';
import PropTypes from 'prop-types';

const OptionSelect = ({
  name, value, label, options,
}) => (
  <>
    <select name={name} value={value}>
      <label htmlFor="type">{label}</label>
      <option value="" disabled>
        Choose option
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.name}</option>
      ))}
    </select>
  </>
);

OptionSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(PropTypes.object).isRequired,
};

export default OptionSelect;
