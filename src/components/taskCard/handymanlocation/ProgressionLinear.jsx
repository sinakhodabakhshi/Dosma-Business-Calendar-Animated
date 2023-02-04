import BorderLinearProgress from "./BorderLinearProgress";
import LinearLabel from "./LinearLabel";

export default function ProgressionLinear({ progress }) {
  return (
    <div className="scale-x-[-1] text-[#424242] font-semibold space-y-2">
      <LinearLabel />
      <BorderLinearProgress variant="determinate" value={progress} />
    </div>
  );
}
