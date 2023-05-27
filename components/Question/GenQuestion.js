import dynamic from "next/dynamic";
import StaticMath from "../StaticMath/StaticMath";

const QuestionClientSide = dynamic(
  () => import("../../components/StaticMath/children/StaticMathClientSide"),
  {
    ssr: false,
  }
);

/*
export default function GenQuestion({ className, latex, style }) {
  let firstLine, secondLine, thirdLine;
  firstLine = `3 kg of potatoes and 4 kg of carrots have a total cost of 440p`;
  secondLine = `4 kg of potatoes and 3 kg of carrots have a total cost of 470p`;
  thirdLine = `What is the total cost of 1 kg of potatoes and 1 kg of carrots`;
  return (
    <>
      <StaticMath latex={`\\text{${firstLine}}`} />
      <StaticMath latex={`\\text{${secondLine}}`} />
      <StaticMath latex={`\\text{${thirdLine}}`} />
    </>
  );
}
*/

import Random from "./Random";

const varNames = ["A", "B"];
const varOperators = ["+", "-"];

export default function GenQuestion({ className, latex, style }) {
  let firstEquation, secondEquation, thirdLine;

  const UOM = ["kgs", "litres", "pounds", "pints", "numbers"];
  let UOMval;
  const itemList = {
    kgs: ["Rice", "Brown Rice", "Banana", "Carrots", "Potatoes", "Courgette"],
    litres: ["Olive Oil", "Sunflower Oil", "Rapeseed Oil", "Hemp Oil"],
    pounds: ["Onions", "Beetroot", "Beans"],
    pints: ["skimmed milk", "semi-skimmed milk", "whole milk"],
    numbers: ["Eggplant", "Cucumber", "garlic"],
  };

  let firstItemChosenIndex, secondItemChosenIndex;
  let firstEquationFirstOperand = Random(1, 5); //3; //a
  let firstEquationSecondOperand = Random(1, 5); //4; //b
  let firstItem, secondItem;
  let secondEquationFirstOperand = Random(1, 5); //4; //c
  let secondEquationSecondOperand = Random(1, 5); //3; //d

  let matrixDeterminant =
    secondEquationSecondOperand * firstEquationFirstOperand -
    firstEquationSecondOperand * secondEquationFirstOperand;

  let firstEquationRHS = Random(1, 1000); //440; // e
  firstEquationRHS =
    firstEquationRHS % matrixDeterminant === 0
      ? firstEquationRHS
      : Random(1, 1000);

  let secondEquationRHS = Random(1, 1000); // 470; //f
  secondEquationRHS =
    secondEquationRHS % matrixDeterminant === 0
      ? secondEquationRHS
      : Random(1, 1000);

  function generateUOM() {
    return UOM[Random(0, 5)];
  }
  function generateItem() {
    const chosenItemIndex = Random(0, itemList[UOMval].length - 1);
    return itemList[UOMval][chosenItemIndex];
  }
  function generateItems() {
    firstItemChosenIndex = Random(0, itemList[UOMval].length - 1);
    firstItem = itemList[UOMval][firstItemChosenIndex];
    let secondItemChosenIdx = Random(0, itemList[UOMval].length - 1);

    if (firstItemChosenIndex === secondItemChosenIdx) {
      secondItemChosenIndex =
        firstItemChosenIndex - 1 >= 0 ? firstItemChosenIndex - 1 : 0;
      secondItemChosenIndex =
        firstItemChosenIndex + 1 <= itemList[UOMval].length - 1
          ? firstItemChosenIndex + 1
          : 0;
    } else secondItemChosenIndex = secondItemChosenIdx;
    secondItem = itemList[UOMval][secondItemChosenIndex];

    return [firstItem, secondItem];
  }

  UOMval = generateUOM();
  [firstItem, secondItem] = generateItems();

  firstEquation =
    firstEquationFirstOperand +
    ` ${UOMval} of ${firstItem}` +
    //varOperators[0] +
    " and " +
    firstEquationSecondOperand +
    ` ${UOMval} of ${secondItem}` +
    " = " +
    firstEquationRHS;

  secondEquation =
    secondEquationFirstOperand +
    ` ${UOMval} of ${firstItem}` +
    //varOperators[0] +
    " and " +
    secondEquationSecondOperand +
    ` ${UOMval} of ${secondItem}` +
    " = " +
    secondEquationRHS;
  thirdLine = `What is the total cost of 1 ${UOMval} of ${firstItem} 
      and 1 ${UOMval} of ${secondItem}`;

  return (
    <>
      <StaticMath latex={`\\text{${firstEquation}}`} />
      <StaticMath latex={`\\text{${secondEquation}}`} />
      <StaticMath latex={`\\text{${thirdLine}}`} />
    </>
  );
}
