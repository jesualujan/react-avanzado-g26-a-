import React from 'react'

const Header = ({title}) => {
  return (
    <h1> {title} </h1>
  )
}


Header.defaultProps ={
    title: 'Este texto es el valor por defecto para el prop "title"'
}

export default Header