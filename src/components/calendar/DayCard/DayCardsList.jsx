import DayCard from "./DayCard";

export default function DayCardsList({data ,active}) {
  return (
    <>
      {Object.keys(data).map((day, index) => (
        <DayCard
          key={day}
          id={day}
          first={index === 0}
          dayDetails={data[day]}
          isActive={active === day}
        />
      ))}
    </>
  );
}
