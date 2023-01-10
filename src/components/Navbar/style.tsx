import styled from 'styled-components'

export const StyledDivContainer = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  color: ${({theme}) => theme.primary};
  background-color: ${({theme}) => theme.background};
  font-size: 21px;
`

export const StyledDivContainerWrapper = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
`

export const StyledDivContainerContent = styled.div`
  a {
    display: block;
    color: ${({theme}) => theme.secondary};
    text-align: center;
    padding: 16px 24px;
    text-decoration: none;
  }

  &:hover{
    background-color: ${({theme}) => theme.hover};
  }
`

export const StyledDivContainerContentTitle = styled.div`
  width: 20%;
  text-align: left;
  padding-left: 2rem;
  font-weight: bold;
`

export const StyledDivContainerContentAction = styled.div`
  width: 20%;
  text-align: right;
  padding-right: 2rem;
`