import React from 'react';
import styled from '@emotion/styled';
import CommonMathData from "../../../content/assets/common-math.json";

const DropdownStyled = styled('div')`
  margin: 0 0 20px 0;
`;

const Div = styled('div')`
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.highlight};
`;

console.log(CommonMathData.electricFieldForce+"\text{ and }"+CommonMathData.electricField)

const Dropdown = (props) => {
  return (
    <DropdownStyled>
      <details open>
        <summary>{props.title}</summary>
        <img src={props.image}></img>
        <Div>{props.body}</Div>
      </details>
    </DropdownStyled>
  )
}

export default Dropdown
