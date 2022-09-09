import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from '../../Components/form/TextField/index'
import Button from '../../Components/form/SubmitButton/index'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const INITIAL_FORM_STATE = {
  email: '',
  password: '',
}

const FORM_VALIDATION = Yup.object().shape({
  email: Yup.string().email('Invalid email.').required('Required'),
  password: Yup.string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .required('Required')
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
})

const useStyles = makeStyles({
  root: {
    marginTop: '20px',
    backgroundColor: 'white',
    outline: 'none',
    borderRadius: '5px',
    border: 'none',
    '@media screen and (min-width: 320px) and (max-width: 1080px)': {
      width: '100%',
    },
  },
})

const Login = () => {
  const classes = useStyles()

  return (
    <SubContainer>
      <MainText>Login</MainText>
      <SubText>Log in into your account and manage your deliveries!</SubText>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={values => {}}
      >
        <Form style={{ width: '100%' }}>
          <Grid item xs={12} sm={12}>
            <TextField name="email" label="Email Address" className={classes.root} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField name="password" label="Password" className={classes.root} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button>LOGIN</Button>
          </Grid>
        </Form>
      </Formik>
    </SubContainer>
  )
}

const SubContainer = styled.div`
  width: 30%;
  background-color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
  }
`

const MainText = styled.h1`
  text-align: center;
  margin: 30px 0px;
  font-size: 2.5rem;
  color: #112d4e;
`

const SubText = styled.p`
  text-align: center;
  color: #112d4e;
  line-height: 1.5;
  margin-bottom: 20px;
`

export default Login
