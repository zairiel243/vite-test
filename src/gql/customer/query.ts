import { gql } from '@apollo/client'

export const GET_CUSTOMERS = gql`
  query GET_CUSTOMERS {
    customer {
      id
      first_name
      last_name
      username
      email
      phone
      orders {
        id
        order_date
        product
        purchase_price
        discount_price
      }
    }
  } 
`