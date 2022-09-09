import axios from 'axios'

const wefleetApi = axios.create({
  baseURL: `${process.env.REACT_APP_WE_FLEET_API}`,
})

const microApi = axios.create({
  baseURL: `${process.env.REACT_APP_WE_FLEET_MICROSERVICE_API}`,
})

const getConsignmentDetails = async id => {
  try {
    const res = await microApi.get(`/?q=${id}`)
    if (res.status === 200) {
      return res
    }
    return {}
  } catch (e) {
    console.error('Error getting consignment: ', e)
    return {}
  }
}

export default getConsignmentDetails

export async function getConsByWefleetID(params) {
  const { wefleet_id, token } = params
  let url = `/api/v1/public/consignments/${wefleet_id}/${token}/`
  return await wefleetApi.get(url)
}

export async function updateCustomerFormData(consignment_id, data) {
  let url = `/api/v1/public/consignments/customer_form/${consignment_id}/`
  return await wefleetApi.put(url, data)
}
