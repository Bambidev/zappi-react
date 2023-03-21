import React from 'react'
import { products } from '../../data/Products'
import Button from '../UI/Button/Button'
import Producto from './Producto'
import { ButtonContainerStyled, ProductosContainer, ProductosWrapper } from './ProductosStyles'

const Productos = () => {
  return (
    <ProductosWrapper>
        <h2>Nuestros Productos</h2>
        <ProductosContainer>
            {
                products.map(product => (
                    <Producto key={product.id} {...product}/>
                ))
            }
        </ProductosContainer>

        <ButtonContainerStyled>
            <Button>
                Ver Menos
            </Button>
            <Button disabled>
                Ver Mas
            </Button>
        </ButtonContainerStyled>
    </ProductosWrapper>
  )
}

export default Productos