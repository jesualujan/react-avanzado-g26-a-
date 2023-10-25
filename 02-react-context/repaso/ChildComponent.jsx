import React from 'react'

const ChildComponent = ({header, parentCallback}) => {
    parentCallback('Este texto se renderiza en ParentComponent desde ChildComponent (hijo a padre)')
  return (
   <h2>{header}</h2>
  )
}

export default ChildComponent