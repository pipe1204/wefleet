import React from 'react'
import styled from 'styled-components'
import Logo from '../../Images/WeFleet Logo.png'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import OtherStatus from './OtherStatus'
import { getConsByWefleetID } from '../../dataSources/useWeFleetAPI'
//Components
import Questions from './Questions'

const CustomerForm = () => {
  const { wefleet_id, token } = useParams()
  const [consignment, setConsignment] = React.useState(null)
  const [loading, setLoading] = React.useState(true)

  const getConsignment = async () => {
    setLoading(true)
    const res = await getConsByWefleetID({ wefleet_id, token })
    setConsignment(res.data)
    setLoading(false)
  }

  React.useEffect(() => {
    getConsignment()
  }, [wefleet_id, token])

  return (
    <Container>
      <Link to="/" style={{ textAlign: 'center' }}>
        <LogoAvatar src={Logo} />
      </Link>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {'status_id' in consignment ? (
            <Questions {...consignment} setConsignment={setConsignment} />
          ) : (
            <OtherStatus />
          )}
        </>
      )}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 50px 0px;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin: 20px;
    width: 90%;
  }
`
const LogoAvatar = styled.img`
  width: 12%;
  height: 12%;
  padding: 1rem 0;
  cursor: pointer;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 40%;
    height: 40%;
  }
`
export default CustomerForm
