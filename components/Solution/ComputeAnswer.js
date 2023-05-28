const ComputeAnswer = (
  firstEquationFirstOperand,
  firstEquationSecondOperand,
  firstEquationRHS,
  secondEquationFirstOperand,
  secondEquationSecondOperand,
  secondEquationRHS
) => {
  //let x = ((-d * e) + (b * f))/((a * d) - (b * c));
  console.log(`firstOperand  ${firstEquationFirstOperand}`);
  console.log(`second operand  ${firstEquationSecondOperand}`);
  console.log(`first equation rhs ${firstEquationRHS}`);
  console.log(`second equation first operand ${secondEquationFirstOperand}`);
  console.log(`second equation second operand ${secondEquationSecondOperand}`);
  console.log(`second  equation rhs ${secondEquationRHS}`);
  let x =
    (secondEquationSecondOperand * firstEquationRHS -
      firstEquationSecondOperand * secondEquationRHS) /
    (firstEquationFirstOperand * secondEquationSecondOperand -
      firstEquationSecondOperand * secondEquationFirstOperand);
  console.log(`A is ${x}`);
  let y =
    (-secondEquationFirstOperand * firstEquationRHS +
      firstEquationFirstOperand * secondEquationRHS) /
    (firstEquationFirstOperand * secondEquationSecondOperand -
      firstEquationSecondOperand * secondEquationFirstOperand);
  console.log(`B is ${y}`);
  return x + y;
};
export default ComputeAnswer;
