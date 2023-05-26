import dynamic from "next/dynamic";
import StaticMath from "../StaticMath/StaticMath";
// ../components/StaticMath/StaticMath";

const QuestionClientSide = dynamic(
  () => import("../../components/StaticMath/children/StaticMathClientSide"),
  {
    ssr: false,
  }
);

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
