import React from 'react';

interface SelectFieldProps {
  name: string;
  register: any;
  errors: any;
  placeholder: string;
  options: Array<{ label: string; value: string }>;
}

const SelectField: React.FC<SelectFieldProps> = ({
  name,
  register,
  errors,
  placeholder,
  options,
}) => (
  <div className='form-group'>
    <label htmlFor={name}>{placeholder}</label>
    <select id={name} name={name} {...register(name)}>
      <option value='' disabled selected>
        Select an option
      </option>{' '}
      {/* Added this line */}
      {options.map((option) => (
        <option key={option.label} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {errors[name] && <span className='error'>{errors[name].message}</span>}
  </div>
);

export default SelectField;
