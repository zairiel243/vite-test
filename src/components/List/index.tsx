import styled from 'styled-components'
import { useQuery } from '@apollo/client'

import { GET_CUSTOMERS } from '../../gql/customer/query'
import Customers from '../../interfaces/Customers'

// interface Props {
//   key?: String
// }

const StyledList = styled.div`
  border-radius: 10px;
  border: ${({ theme }) => theme.primary};
`;

const StyledListItem = styled.div`
  border: ${({ theme }) => `1px solid ${theme.secondary}`};
  padding: 8px 8px;
  color: ${({ theme }) => theme.secondary};
  margin-bottom: 12px;
`;

function List () {
  const { loading, error, data } = useQuery(GET_CUSTOMERS)
  return (
    <StyledList>
      {loading
        ? <>loading...</>
        : data.customer?.map((data: Customers) => (
          <StyledListItem key={data.id}>
            {`${data.first_name} ${data.last_name}`}
          </StyledListItem>
        ))
      }
    </StyledList>
  )
}

export default List