import React from 'react'
import { FooterContainerStyled, LinksConatinerStyled } from './FooterStyle'

const Footer = () => {
  return (
    <FooterContainerStyled>
      <LinksConatinerStyled>
        <a href="#">Terminos de uso</a>
        <a href="#">Soporte</a>
        <a href="#">Trabaja con nosotros</a>
      </LinksConatinerStyled>
      <p>
        Hecho con ❤️ en <span>Nucba</span>
      </p>
    </FooterContainerStyled>
  )
}

export default Footer