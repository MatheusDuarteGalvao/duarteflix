import React from 'react';

function FormField({ type, name, value, handleChange }) {
  return (
    <div>
      <label>
        Nome da Categoria:
        <input
          type={type}
          name={name}
          value={value}
          onChange={handleChange}
        />
      </label>
    </div>
  );
}

export default FormField;