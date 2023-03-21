import React from 'react'
import Button from '../UI/Button/Button'
import { HeroContainerStyled, HeroImageContainerStyled, HeroTextContainerStyled } from './HeroStyles'

const Hero = () => {
  return (
    <HeroContainerStyled>
        <HeroTextContainerStyled>
            <h1>Si tenes Zappi,</h1>
            <h2>Tenes Nucba.</h2>
            <p>Busca lo que quieras y Nucba te quedes sin conmida</p>
            <Button>
                Ver mas
            </Button>
        </HeroTextContainerStyled>
        <HeroImageContainerStyled>
            <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797662/coding/NucbaZappi/Assets/pizza-hero_enjaeg_oprhww.png'
            alt=''
            />
        </HeroImageContainerStyled>
    </HeroContainerStyled>
  )
}

export default Hero