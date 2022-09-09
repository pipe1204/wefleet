import React from 'react'
import styled from 'styled-components'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import TextField from '../../Components/form/TextField/index'
import Button from '../../Components/form/SubmitButton/index'
import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { updateCustomerFormData } from '../../dataSources/useWeFleetAPI'

const FORM_VALIDATION = Yup.object().shape({
  residence_or_business: Yup.string(),
  authorised_location: Yup.string(),
  shipping_address_address1: Yup.string(),
  shipping_address_address2: Yup.string(),
  shipping_address_province_code: Yup.string(),
  shipping_address_zip: Yup.string(),
  note: Yup.string(),
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

export default function App(consignment) {
  const [formSubmitionResponse, setFormSubmitionResponse] = React.useState()
  const [isLoading, setIsLoading] = React.useState(false)

  const classes = useStyles()
  const {
    customer_first_name,
    customer_last_name,

    shipping_address_address1,
    shipping_address_address2,
    shipping_address_province_code,
    shipping_address_zip,
    note,
  } = consignment

  const INITIAL_FORM_STATE = {
    residence_or_business: '',
    authorised_location: '',
    shipping_address_address1: shipping_address_address1 || '',
    shipping_address_address2: shipping_address_address2 || '',
    shipping_address_province_code: shipping_address_province_code || '',
    shipping_address_zip: shipping_address_zip || '',
    special_instructions: '',
  }

  const handleSubmit = async formData => {
    formData.note = `${formData.residence_or_business} ${formData.authorised_location} ${formData.special_instructions} ${note}`
    setIsLoading(true)
    const res = await updateCustomerFormData(consignment.consignment_id, formData)
    setFormSubmitionResponse(res.data)
    setIsLoading(false)
  }

  return (
    <SubContainer>
      <MainText>
        Hi{' '}
        <span>
          {customer_first_name} {customer_last_name}!
        </span>{' '}
        Please provide any additional details <br></br>for your delivery 📦
      </MainText>
      <SubText></SubText>
      <Notes>
        <span>IMPORTANT:</span> We DO NOT deliver to PO Boxes or Parcels Lockers.<br></br>
        Please provide an alternative address for your delivery
      </Notes>
      <Notes1>
        Delivery times are from 7:00am to 7:30pm from Monday to Friday. Changes to the
        delivery will only be effective until the delivery has been dispatched from the
        distribution centre.
      </Notes1>

      {formSubmitionResponse?.status ? (
        <SuccessText>{formSubmitionResponse?.message}</SuccessText>
      ) : (
        <ErrorText>{formSubmitionResponse?.message}</ErrorText>
      )}
      <Formik
        initialValues={{
          ...INITIAL_FORM_STATE,
        }}
        validationSchema={FORM_VALIDATION}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            handleSubmit(values)
            actions.setSubmitting(false)
          }, 1000)
          // actions.resetForm()
        }}
      >
        <Form style={{ width: '100%', marginTop: '10px' }}>
          <Grid item xs={12} sm={12}>
            <LabelQuestions>Is the address a Residence or Business?</LabelQuestions>
            <TextField
              name="residence_or_business"
              label="E.g Business. It is called The Planet of the Grapes."
              className={classes.root}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <LabelQuestions>
              Won't be home? Authorise to leave the parcel in a location close to you
            </LabelQuestions>
            <TextField
              name="authorised_location"
              label="E.g Please leave the parcel at the pharmacy downstairs."
              className={classes.root}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <LabelQuestions>
              Want to redirect your delivery to a different address?
            </LabelQuestions>
            <TextField
              name="shipping_address_address1"
              label="Address"
              className={classes.root}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="shipping_address_address2"
              label="Apartment, Level, Suit, etc (optional)"
              className={classes.root}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="shipping_address_province_code"
              label="Suburb"
              className={classes.root}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="shipping_address_zip"
              label="Postcode"
              className={classes.root}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <LabelQuestions>Please let us know any special instructions</LabelQuestions>
            <TextField
              name="special_instructions"
              label="E.g Please put the parcel next to the white pot."
              className={classes.root}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Button>{isLoading ? 'Updating...' : 'SUBMIT'}</Button>
          </Grid>
        </Form>
      </Formik>
    </SubContainer>
  )
}

const SubContainer = styled.div`
  width: 60%;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
  }
`

const MainText = styled.h1`
  text-align: center;
  margin: 10px 0px;
  font-size: 1.5rem;
  color: #112d4e;
  span {
    line-height: 1.5;
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

const SubText = styled.p`
  text-align: center;
  background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
  margin-bottom: 40px;
`

const Notes = styled.p`
  text-align: center;
  color: #112d4e;
  font-weight: 700;
  line-height: 1.5;
  margin-bottom: 30px;
  span {
    line-height: 1.5;
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
`

const Notes1 = styled.p`
  text-align: left;
  color: #112d4e;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 30px;
  span {
    line-height: 1.5;
    background: linear-gradient(to right, #30cfd0 0%, #8247f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
`

const LabelQuestions = styled.h4`
  margin-top: 20px;
  color: #112d4e;
`
const SuccessText = styled.p`
  text-align: center;
  background: green;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
  margin-bottom: 0px;
`
const ErrorText = styled.p`
  text-align: center;
  background: red;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.5;
  margin-bottom: 0px;
`
