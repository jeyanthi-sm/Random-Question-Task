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
  return (
    <>
      <StaticMath
        latex={`\\text{3 kg of potatoes and 4 kg of carrots have a total cost of 440p.}`}
      />
      <StaticMath
        latex={`\\text{4 kg of potatoes and 3 kg of carrots have a total cost of 470p}`}
      />
      <StaticMath
        latex={`\\text{What is the total cost of 1 kg of potatoes and 1 kg of carrots}`}
      />
    </>
  );
}
