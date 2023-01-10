import { useState, FC } from 'react'
import styled, { ThemeProps, useTheme } from 'styled-components'

import BaseComponentProps from '../../interfaces/BaseComponentProps';



const StyledList = styled.div`
    border-radius: 10px;
    border: ${({ theme }) => theme.primary};
`;

const StyledListItem = styled.div`
    border: ${({ theme }) => theme.primary};
`;

function List () {
    return (
        <StyledList>
            <StyledListItem>

            </StyledListItem>

        </StyledList>    
    )
}

export default List