import dynamic from "next/dynamic";
import StaticMath from "../StaticMath/StaticMath";

const AnswerClientSide = dynamic(
  () => import("../../components/StaticMath/children/StaticMathClientSide"),
  {
    ssr: false,
  }
);

export default function Answer({ className, latex, style }) {
  let solutionLine = "130";
  return (
    <>
      <StaticMath latex={`\\text{${solutionLine}}`} />
    </>
  );
}
