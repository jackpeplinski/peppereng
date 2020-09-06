import React from 'react';
import styled from '@emotion/styled';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';


const StyledDropdown = styled('div')`
  .body {
    padding: 5px 0 0 0;
  }
`;

const Dropdown = (props) => {
  return (
    <div>
      <details>
        <summary>{props.title}</summary>
        <p id="body">{props.body}</p>
      </details>
    </div>
  )
}

export default Dropdown
