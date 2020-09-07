import React from 'react';
import styled from '@emotion/styled';
import 'katex/dist/katex.min.css';
import { InlineMath, BlockMath } from 'react-katex';

const Dropdown = (props) => {
  return (
    <div>
      <details id="problem">
        <summary>{props.title}</summary>
        <p>{props.body}</p>
      </details>
    </div>
  )
}
export default Dropdown
