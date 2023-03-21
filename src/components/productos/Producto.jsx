import React from 'react'
import { ContainerPrice, ProductosCard } from './ProductosStyles'
import Button from '../UI/Button/Button'

const Producto = ({
    img,
    title,
    desc,
    price
}) => {
  return (
    <ProductosCard>
        <img src={img} alt={title} />
        <h2>{title}</h2>
        <p>{desc}</p>
        <ContainerPrice>
            ${price}
            <Button>
                Agregar
            </Button>
        </ContainerPrice>
    </ProductosCard>
  )
}

export default Producto