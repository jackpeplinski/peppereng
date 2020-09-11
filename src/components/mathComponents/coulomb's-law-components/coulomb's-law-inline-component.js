import React from 'react';
import { InlineMath, BlockMath } from 'react-katex';
import formulas from "./coulomb's-law-component";

//console.log(Object.values(coulombsLaw));
//console.log(JSON.stringify(coulombsLaw));
//onsole.log(coulombsLaw.prototype.toString());
//console.log(coulombsLawObject.coulombsLaw);

const CoulombsLawInline = () => {
  return (
    <div>
      <InlineMath math={formulas.coulombsLaw.coulombsLawFullVector}/>
    </div>
  )
}

export default CoulombsLawInline
