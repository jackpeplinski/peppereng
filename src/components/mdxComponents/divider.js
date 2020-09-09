import React from 'react';
import styled from '@emotion/styled';

const StyledDivider = styled('hr')`
  height: 1px;
  border: 0;
  color: #333;
  background-color: #333;
  width: 100%;
`;

const Divider = () => {
  return (
    <StyledDivider />
  )
}

export default Divider
