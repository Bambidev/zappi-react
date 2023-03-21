import React from 'react'
import { StyledButton } from './ButtonStyled'

const Button = ({
    children,
    radious = '10',
    secondary,
    disabled = false
}) => {
  return (
    <StyledButton
        disabled={disabled}
        radious={radious}
        secondary={secondary}
        whileTap = { {scale: 0.95} }
    >
        { children }
    </StyledButton>
  )
}

export default Button