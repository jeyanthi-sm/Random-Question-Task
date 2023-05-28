import dynamic from "next/dynamic";
import StaticMath from "../StaticMath/StaticMath";
import GenerateUOM from "./GenerateUOM";
import GenerateItems from "./GenerateItems";
import GenerateCoefficients from "./GenerateCoefficients";
import GenerateRHS from "./GenerateRHS";
import GenerateEquation from "./GenerateEquation";
import ComputeAnswer from "../Solution/ComputeAnswer";
import GenerateCurrency from "./GenerateCurrency";

const QuestionClientSide = dynamic(
  () => import("../StaticMath/children/StaticMathClientSide"),
  {
    ssr: false,
  }
);

export default function GenerateQuestion({ className, latex, style }) {
  let [UOMvalue, itemList] = GenerateUOM();
  let [firstItem, secondItem] = GenerateItems(UOMvalue, itemList);

  let [
    firstEquationFirstOperand,
    firstEquationSecondOperand,
    secondEquationFirstOperand,
    secondEquationSecondOperand,
  ] = GenerateCoefficients();

  const [firstEquationRHS, secondEquationRHS] = GenerateRHS(
    firstEquationFirstOperand,
    firstEquationSecondOperand,
    secondEquationFirstOperand,
    secondEquationSecondOperand,
    1,
    2
  );

  let currency = GenerateCurrency();

  let thirdLine = `What is the total cost of 1 ${UOMvalue} of ${firstItem}
       and 1 ${UOMvalue} of ${secondItem}`;

  let [firstEquation, secondEquation] = GenerateEquation(
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
  );

  ComputeAnswer(
    firstEquationFirstOperand,
    firstEquationSecondOperand,
    firstEquationRHS,
    secondEquationFirstOperand,
    secondEquationSecondOperand,
    secondEquationRHS
  );

  return (
    <>
      <StaticMath latex={`\\text{${firstEquation}}`} />
      <StaticMath latex={`\\text{${secondEquation}}`} />
      <StaticMath latex={`\\text{${thirdLine}}`} />
    </>
  );
}
