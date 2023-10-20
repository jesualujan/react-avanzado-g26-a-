import logo from '../../assets/react.svg'
import { useState } from 'react'

const SimpleForm = () => {
 //* TODA NUESTRA LÓGICA VA AQUÍ PARA QUE FUNCIONE EL FORM 
  //? Paso #2: Crear los estados donde guardaré la información tecleada

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  //? Paso #4: Crear la función que se ejecutara al hacer click en el botón de enviar del formulario
  const handleSubmit = (event) =>{
      event.preventDefault()
      console.log('Email: ', email, 'Password: ', password)
  }


  return (
    //* VA TODO NUESTRO DISEÑO HTML
    //? Paso #1: Crear el formulario base en JSX
    <div className='login'>
      <div className='login-container'>
        <img src={logo} alt='logo' />
        
        <form onSubmit={handleSubmit}>
            {/* Paso #3: Guardo la información en el estado de */}
          <label htmlFor='email'>Email</label>
          <input
            type='text'
            name='email'
            placeholder='correo@mail.com'
            id='simple-email'
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />

          <label htmlFor='password'>Password</label>
          <input
            type='password'
            name='password'
            id='simple-password'
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
          
          <button type='submit'>
            Iniciar Sesion
          </button>
          
        </form>
      </div>
    </div>
  )
}

export default SimpleForm