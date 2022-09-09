import React from 'react'
import { MdLocationPin } from 'react-icons/md'
import { SiFastapi } from 'react-icons/si'
import { AiFillMessage } from 'react-icons/ai'
import Sales from '../Images/sales.png'
import Customer from '../Images/customer.png'
import Shopping from '../Images/shopping.png'

export const worksUser = [
  {
    id: 1,
    icon: <MdLocationPin />,
    title: 'Real-time',
    info: 'Provide real-time drivers updates to your customers and add that delightful experience.',
  },
  {
    id: 2,
    icon: <SiFastapi />,
    title: 'Fast deliveries',
    info: 'Offer next and same day delivery to your customers and increase customer satisfaction',
  },
  {
    id: 3,
    icon: <AiFillMessage />,
    title: 'Live messages',
    info: 'Sometimes more than a blue dot on a map is needed, text customers in real-time to confirm statuses',
  },
]

export const benefitsUser = [
  {
    id: 1,
    image: <img src={Sales} alt="Sales" />,
    title: 'Increase sales',
    info: '65% of online shoppers say delivery speeds influence their purchasing decisions.',
  },
  {
    id: 2,
    image: <img src={Shopping} alt="Shopping" />,
    title: 'Repeated customers',
    info: '85% of online shoppers come back to the same online store if they get fast deliveries.',
  },
  {
    id: 3,
    image: <img src={Customer} alt="Customer" />,
    title: 'Improve experience',
    info: 'Great customer experience impacts the willingness of a customer to be a loyal advocate.',
  },
]
