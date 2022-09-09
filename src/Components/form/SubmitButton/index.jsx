import React from 'react'
import { Button } from '@material-ui/core'
import { useFormikContext } from 'formik'

const ButtonWrapper = ({ children, ...otherProps }) => {
  const { submitForm } = useFormikContext()

  const handleSubmit = () => {
    submitForm()
  }

  const configButton = {
    variant: 'contained',
    fullWidth: true,
    color: 'primary',
    onClick: handleSubmit,
  }
  return (
    <Button
      style={{
        backgroundColor: 'black',
        marginTop: '30px',
        fontSize: '1rem',
      }}
      {...configButton}
    >
      {children}
    </Button>
  )
}

export default ButtonWrapper
