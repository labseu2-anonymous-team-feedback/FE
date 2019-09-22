import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({
  id, name, value, label, onChange, rows, className,
}) => (
  <>
    <label htmlFor={id} className="pb-3">{label}</label>
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      rows={rows}
      className={className}
    />
  </>
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  rows: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default TextArea;
