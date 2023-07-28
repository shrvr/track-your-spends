import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import InputField from 'src/Components/InputField';
import SelectField from 'src/Components/SelectField';
import 'src/Style/Register.scss';

const professions = ['Engineer', 'Doctor', 'Artist', 'Student', 'Other'];
const countries = ['USA', 'India', 'Australia', 'UK', 'Canada', 'Other'];

const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is required'),
  retypePassword: yup.string().oneOf([yup.ref('password'), undefined], 'Passwords must match'),
  profession: yup.string().required('Profession is required'),
  country: yup.string().required('Country is required'),
});

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit: any = (data: any) => console.log(data);

  return (
    <div className='register-form'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          type='text'
          name='firstName'
          placeholder='First Name'
          register={register}
          errors={errors}
        />

        <InputField
          type='text'
          name='lastName'
          placeholder='Last Name'
          register={register}
          errors={errors}
        />

        <InputField
          type='email'
          name='email'
          placeholder='Email'
          register={register}
          errors={errors}
        />

        <InputField
          type='password'
          name='password'
          placeholder='Password'
          register={register}
          errors={errors}
        />

        <InputField
          type='password'
          name='retypePassword'
          placeholder='Retype Password'
          register={register}
          errors={errors}
        />

        <SelectField
          name='profession'
          placeholder='Profession'
          register={register}
          errors={errors}
          options={professions.map((profession) => ({ label: profession, value: profession }))}
        />

        <SelectField
          name='country'
          placeholder='Country'
          register={register}
          errors={errors}
          options={countries.map((country) => ({ label: country, value: country }))}
        />

        <button type='submit' className='submit-btn'>
          Register
        </button>
        <p>
          Already registered?{' '}
          <a className='login-link' href='/login'>
            Log in
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
