import React from 'react';
import PropTypes from 'prop-types';

function TextInput({
  id, onChange, ref, name, required, title, type,
}) {
  return (
    <>
      <label htmlFor={id} className="d-flex">
        {title}
      </label>
      <input
        type={type}
        id={id}
        className="form-control mb-4"
        name={name}
        ref={ref}
        onChange={onChange}
        required={required}
      />
    </>
  );
}

TextInput.defaultProps = {
  onChange: undefined,
  ref: undefined,
  name: '',
  required: false,
  type: 'text',
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  ref: PropTypes.shape({}),
  name: PropTypes.string,
  required: PropTypes.bool,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

export default TextInput;
