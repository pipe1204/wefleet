import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from '../../Components/form/TextField/index'
import Button from '../../Components/form/SubmitButton/index'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import emailjs from 'emailjs-com'

const INITIAL_FORM_STATE = {
  name: '',
  email: '',
  phone: '',
  city: '',
}

const FORM_VALIDATION = Yup.object().shape({
  name: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email.').required('Required'),
  phone: Yup.number().required(),
  city: Yup.string().required('Required'),
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

const DriversContact = () => {
  const classes = useStyles()

  function SendEmail(object) {
    emailjs
      .send('service_0qvrtrc', 'template_xmt5kms', object, 'user_liZPNCTr3zNF1DBmTPmPW')
      .then(
        result => {
          console.log(result.text)
        },
        error => {
          console.log(error.text)
        },
      )
  }

  return (
    <SubContainer>
      <MainText>Drive with WeFleet!</MainText>
      <SubText>
        Great logistics is backed up by great people.<br></br>Thanks for expressing
        interest in driving with WeFleet.
      </SubText>
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            SendEmail(values)
            actions.setSubmitting(false)
          }, 1000)
          actions.resetForm()
        }}
      >
        <Form style={{ width: '100%' }}>
          <Grid item xs={12} sm={12}>
            <TextField name="name" label="Full Name" className={classes.root} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField name="email" label="Email Address" className={classes.root} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField name="phone" label="Phone number" className={classes.root} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <TextField name="city" label="City" className={classes.root} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button>Submit</Button>
          </Grid>
        </Form>
      </Formik>
    </SubContainer>
  )
}

const SubContainer = styled.div`
  width: 30%;
  background-color: black;
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
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const SubText = styled.p`
  text-align: center;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
  margin-bottom: 20px;
`

export default DriversContact
