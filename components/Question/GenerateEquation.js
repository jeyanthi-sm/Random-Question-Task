const GenerateEquation = (
  firstItem,
  firstEquationFirstOperand,
  firstEquationSecondOperand,
  firstEquationRHS,
  secondItem,
  secondEquationFirstOperand,
  secondEquationSecondOperand,
  secondEquationRHS,
  UOMvalue,
  currency
) => {
  let firstEquation, secondEquation;
  firstEquation =
    firstEquationFirstOperand +
    ` ${UOMvalue} of ${firstItem}` +
    " and " +
    firstEquationSecondOperand +
    ` ${UOMvalue} of ${secondItem}` +
    " is " +
    firstEquationRHS +
    ` ${currency}`;

  secondEquation =
    secondEquationFirstOperand +
    ` ${UOMvalue} of ${firstItem}` +
    " and " +
    secondEquationSecondOperand +
    ` ${UOMvalue} of ${secondItem}` +
    " is " +
    secondEquationRHS +
    ` ${currency}`;

  return [firstEquation, secondEquation];
};

export default GenerateEquation;
