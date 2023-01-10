import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Switch from '../Switch'

import {
  StyledDivContainer,
  StyledDivContainerWrapper,
  StyledDivContainerContent,
  StyledDivContainerContentTitle,
  StyledDivContainerContentAction,
} from './style'

function Navbar() {
  return (
    <nav>
      <StyledDivContainer>
        <StyledDivContainerContentTitle>
          <span> Testing App </span>
        </StyledDivContainerContentTitle>
        <StyledDivContainerWrapper>
          <StyledDivContainerContent>
            <Link to="/"> Home </Link>
          </StyledDivContainerContent>
          <StyledDivContainerContent>
            <Link to="/"> List </Link>
          </StyledDivContainerContent>
          <StyledDivContainerContent>
            <Link to="/"> Bye </Link>
          </StyledDivContainerContent>
        </StyledDivContainerWrapper>
        <StyledDivContainerContentAction>
          <Switch />
        </StyledDivContainerContentAction>
      </StyledDivContainer>
    </nav>
  )
}

export default Navbar