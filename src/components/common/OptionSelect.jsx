import React from 'react';
import PropTypes from 'prop-types';

const OptionSelect = ({
  name, value, label, options, className, onChange,
}) => (
  <>
    <label htmlFor="type">{label}</label>
    <select name={name} value={value} className={className} onChange={onChange}>
      <option value="" disabled>
        Choose option
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>{option.name}</option>
      ))}
    </select>
  </>
);

OptionSelect.defaultProps = { options: [] };

OptionSelect.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.instanceOf(PropTypes.object),
};

export default OptionSelect;
