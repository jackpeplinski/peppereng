import React from 'react';
import styled from '@emotion/styled';

const StyledCallout = styled('div')`
  padding: 20px;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.highlight};
`;

const Callout = (props) => {
  return (
    <StyledCallout>
      <p>{props.body}</p>
    </StyledCallout>
  )
}

export default Callout
