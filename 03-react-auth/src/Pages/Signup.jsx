import React from 'react'
import logo from '@/assets/react.svg'
import '@/Style/form.css'
import {useForm} from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { registerUserService } from '@/Services/userServices'


const Signup = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const navigate = useNavigate()
    
    const onSubmit = async (data) => {
        try {
            const response = await registerUserService(data)
            if(response.status === 201){
              navigate('/login')
              console.log('Usuario creado correctamente')
            }
        } catch (error) {
            console.log('Ocurrio un error al registrarse', error)
        }
    }

  return (
    <main className='form-signin w-100 m-auto'>
    <form onSubmit={handleSubmit(onSubmit)}>
      <img className='mb-4' src={logo} alt='' width='72' height='57' />
      <h1 className='h3 mb-3 fw-normal'>Please sign up</h1>

      <div className='form-floating'>
        <input
          type='text'
          className='form-control'
          id='first_name'
          name='first_name'
          placeholder='John'
          {...register('first_name')}
        />
        <label htmlFor='first_name'>First Name</label>
      </div>

      <div className='form-floating'>
        <input
          type='text'
          className='form-control'
          id='last_name'
          name='last_name'
          placeholder='Doe'
          {...register('last_name')}
        />
        <label htmlFor='last_name'>Last Name</label>
      </div>

      <div className='form-floating'>
        <select
          className='form-select'
          id='gender'
          name='gender'
          {...register('gender')}
        >
          <option value=''>Choose...</option>
          <option value='M'>Male</option>
          <option value='F'>Female</option>
        </select>
        <label htmlFor='gender'>Gender</label>
      </div>

      <div className='form-floating'>
        <input
          type='email'
          className='form-control'
          id='email'
          name='email'
          placeholder='name@example.com'
          {...register('email')}
        />
        <label htmlFor='email'>Email address</label>
      </div>

      <div className='form-floating'>
        <input
          type='password'
          className='form-control'
          id='password'
          name='password'
          placeholder='Password'
          {...register('password')}
        />
        <label htmlFor='password'>Password</label>
      </div>

      <button className='w-100 btn btn-lg btn-primary' type='submit'>Sign up</button>
    </form>
  </main>
  )
}

export default Signup