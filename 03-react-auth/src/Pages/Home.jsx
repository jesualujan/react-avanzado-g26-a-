import React, { useState, useEffect } from 'react'
import { getAllUsersService } from '@/Services/userServices'
import { getAllItemsService, getOneItemService, createItemService } from '@/Services/ItemsServices'
import { useAuthContext } from '@/Context/useAuthContext'
const Home = () => {
  const [itemsList, setItemsList] = useState([])
  const token = localStorage.getItem('token')
  const { logout } = useAuthContext()

  useEffect(() => {
    const getAllItems = async () => {
      try {
        const response = await getAllItemsService()
        setItemsList(response.data)
        console.log(response.data)
      } catch (error) {
        console.log('Hubo un problema al obtener los items')
      }
    }

    getAllItems()
  }, [])

  const dataToCreateItem = {
    product_name: 'Item de prueba',
    description: 'Lorem ipsum dolor',
    price: 500,
    category: 'Adults',
    brand: 'Osinski - Prosacco',
    sku: 'e9cbfac1-301a-42c3-b94a-711a39dc7ed1',
    image: 'https://i.pinimg.com/originals/eb/83/be/eb83be580847bcdc4c8f403c8085d3c8.jpg'
  }

  return (
    <>
      <h1>Home</h1>
      <a onClick={logout} style={{ marginRight: '5px' }} href='#' className='btn btn-primary mr-2'>
        Logout
      </a>
      <div className='d-flex flex-row'>
        <button
          onClick={async () => {
            try {
              const response = await getAllUsersService(token)
              console.log(response.data)
              if (response.status === 200) alert('Request successful, open the console')
            } catch (error) {
              console.log('Hubo un error al obtener los usuarios')
            }
          }}
        >
          Ver todos los usuarios en consola
        </button>
        <button onClick={async () => {
          try {
            const response = await createItemService(token, JSON.stringify(dataToCreateItem))
            console.log(response)
            if (response.status === 201) alert('Request successful, open the console')
          } catch (error) {
            console.log('Hubo un problema al crear el item')
          }
        }}
        >
          Crear un item en consola
        </button>
      </div>
      <div className='d-flex flex-row flex-wrap justify-content-center'>
        {itemsList &&
        itemsList.map((product) => (

          <div className='card' style={{ width: '18rem' }} key={product.id}>
            <img
              className='card-img-top'
              style={{ maxHeight: '300px' }}
              src={product.image}
              alt={product.product_name}
            />
            <div className='card-body'>
              <h5 className='card-title'>{product.product_name}</h5>
              <p className='card-text'>{product.description}</p>
              <a
                onClick={async () => {
                  try {
                    const response = await getOneItemService(product.id)
                    console.log(response.data)
                    if (response.status === 200) alert('Request successful, open the console')
                  } catch (error) {
                    console.log('Hubo un problema al obtener los detalles del item')
                  }
                }} href='#' className='btn btn-primary'
              >
                Ver detalles en consola
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Home
