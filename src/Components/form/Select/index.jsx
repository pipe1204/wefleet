import React from 'react'
import { TextField, MenuItem } from '@material-ui/core'
import { useField, useFormikContext } from 'formik'

const SelectWrapper = ({ name, options, ...otherProps }) => {
  const { setFieldValue } = useFormikContext()
  const [field, meta] = useField(name)

  const handleChange = evt => {
    const { value } = evt.target
    setFieldValue(name, value)
  }

  const configSelect = {
    ...field,
    ...otherProps,
    select: true,
    variant: 'outline',
    fullWidth: true,
    onchange: handleChange,
  }

  if (meta && meta.touched && meta.error) {
    configTextfield.error = true
    configTextfield.helperText = meta.error
  }

  return (
    <TextField {...configSelect}>
      {Object.keys(options).map((item, pos) => {
        return (
          <MenuItem key={pos} value={item}>
            {options[item]}
          </MenuItem>
        )
      })}
    </TextField>
  )
}

export default SelectWrapper
