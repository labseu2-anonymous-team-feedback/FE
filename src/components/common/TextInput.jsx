import React from 'react';
import PropTypes from 'prop-types';

function TextInput({
  id, onChange, value, name, required, title, type,
}) {
  return (
    <>
      <label htmlFor={id} className="d-flex pb-3">
        {title}
      </label>
      <input
        type={type}
        id={id}
        className="form-control mb-4"
        name={name}
        value={value}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

TextInput.defaultProps = {
  required: true,
  type: 'text',
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TextInput;
