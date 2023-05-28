import Random from "./Random";
const GenerateCoefficients = () => {
  let firstEquationFirstOperand = Random(1, 5); //3; //a
  let firstEquationSecondOperand = Random(1, 5); //4; //b
  let secondEquationFirstOperand = Random(1, 5); //4; //c
  let secondEquationSecondOperand = Random(1, 5); //3; //d
  return [
    firstEquationFirstOperand,
    firstEquationSecondOperand,
    secondEquationFirstOperand,
    secondEquationSecondOperand,
  ];
};

export default GenerateCoefficients;
