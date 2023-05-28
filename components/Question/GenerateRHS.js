const GenerateRHS = (
  firstEquationFirstOperand,
  firstEquationSecondOperand,
  secondEquationFirstOperand,
  secondEquationSecondOperand,
  substituteValue1,
  substituteValue2
) => {
  let firstEquationRHS =
    firstEquationFirstOperand * substituteValue1 +
    firstEquationSecondOperand * substituteValue2;

  let secondEquationRHS =
    secondEquationFirstOperand * substituteValue1 +
    secondEquationSecondOperand * substituteValue2;

  return Math.abs(firstEquationRHS - secondEquationRHS) > 0
    ? [firstEquationRHS, secondEquationRHS]
    : "SOME RUBBISH VALUE";
};

export default GenerateRHS;
