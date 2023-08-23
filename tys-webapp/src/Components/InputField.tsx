import React from 'react';

interface InputFieldProps {
  type: string;
  name: string;
  register: any;
  errors: any;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, name, register, errors, placeholder }) => (
  <div className='form-group'>
    <label htmlFor={name}>{placeholder}</label>
    <input id={name} type={type} name={name} {...register(name)} />
    {errors[name] && <span className='error'>{errors[name].message}</span>}
  </div>
);

export default InputField;
export {};
