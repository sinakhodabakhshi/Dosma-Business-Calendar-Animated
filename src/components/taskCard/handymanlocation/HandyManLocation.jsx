import ArrivedBtn from "./ArrivedBtn";
import ProgressionLinear from "./ProgressionLinear";

export default function HandyManLocation({ progress }) {
  return (
    <div className="pt-4 pb-5 px-4 space-y-5 border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D]">
      <ProgressionLinear progress={progress} />
      <ArrivedBtn />
    </div>
  );
}
