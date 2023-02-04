import ActiveTaskMark from "./ActiveTaskMark";
import CardBtn from "./CardBtn";
import DayFirstWord from "./DayFirstWord";
import DayInfo from "./DayInfo";

export default function DayCard({ id, first, dayDetails, isActive }) {
  const { dayWord, activeTask, isCurrent, day } = dayDetails;

  return (
    <div
      className="grow basis-0 w-0 shrink flex flex-col justify-center items-center"
    >
      <DayFirstWord first={first} dayWord={dayWord} />
      <CardBtn isActive={isActive} first={first} id={id} >
        <ActiveTaskMark activeTask={activeTask} />
        <DayInfo isCurrent={isCurrent} day={day} />
      </CardBtn>
    </div>
  );
}
