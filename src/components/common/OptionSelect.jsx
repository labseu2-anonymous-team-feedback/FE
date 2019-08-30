import React from 'react';
import PropTypes from 'prop-types';

const OptionSelect = ({
  name, value, label, options, className,
}) => (
  <>
    <label htmlFor="type">{label}</label>
    <select name={name} value={value} className={className}>
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
  className: PropTypes.string.isRequired,
  options: PropTypes.instanceOf(PropTypes.object).isRequired,
};

export default OptionSelect;
