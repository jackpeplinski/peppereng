import React from 'react';
import styled from '@emotion/styled';
import CommonMathData from "../../../../content/assets/common-math.json";
import { InlineMath, BlockMath } from 'react-katex';
import Divider from "../divider";

const StyledDeriveElectricField = styled('div')`
  padding: 5px;
  background-color: #d9d9d9;
`;

const DeriveElectricField = () => {
  return (
    <StyledDeriveElectricField>
      <BlockMath math={"\\text{Coulomb's law: }" + CommonMathData.coulombsLaw} />
      <BlockMath math={"\\text{ Electric field-force equation: }" + CommonMathData.electricFieldForce} />
      Both equations reference the same electrostatic force, <InlineMath math="\overrightarrow{F}" />. Let's substitute the expression for Coulomb's Law
      into the electric field-force equation. <br/>
      <br/>
      To do this, we'll need to set <InlineMath math={"|q_1| = |q_{test}|"}/> and <InlineMath math={"|q_2| = |q_{source}|"}/> giving 
      <InlineMath math="\overrightarrow{F}=k \frac{ |q_{test}| |q_{source}| }{ r^{2} }" /> and then substituting this into the electrric field-force equation:
      <BlockMath math="\overrightarrow{E}=\frac{k \frac{\cancel{|q_{test}|}|q_{source}|}{r^{2}}}{\cancel{|q_{test}|}}" />
      <BlockMath math="\overrightarrow{E} = k\frac{ |q_{source}| } {r^2}" />
    </StyledDeriveElectricField>
  )
}

export default DeriveElectricField
