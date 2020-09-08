import React from 'react';
import styled from '@emotion/styled';

const DropdownStyled = styled('div')`
  margin: 0 0 20px 0;
`;

const P = styled('p')`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.highlight};
`;

const Dropdown = (props) => {
  return (
    <DropdownStyled>
      <details>
        <summary>{props.title}</summary>
        <img src={props.image}></img>
        <P>{props.body}</P>
      </details>
    </DropdownStyled>
  )
}

export default Dropdown
