import { useContext, useState } from "react";
import DayCardsList from "./DayCard/DayCardsList";
import TaskSection from "../taskmanagement/TaskSection";
import DataContext from "../../context/dataContext";

export default function CalDatePicker() {
  const { itemsData: data } = useContext(DataContext);
  const [active, setActive] = useState(Object.keys(data)[1]);

  //please be carfull when you made changes to DayCard component , you probably going to breake this part of the app
  //you should check the logic here so you can make changes to DayCard
  //feel free to change the logic so it fit your changes
  const handleClick = (e) => {
    if (e.target.parentElement.value) setActive(e.target.parentElement.value);
    if (e.target.value) setActive(e.target.value);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="mx-auto flex flex-row-reverse text-sm"
      >
        <DayCardsList data={data} active={active} />
      </div>

      {active && data[active] && (
        <TaskSection
          haveActiveTask={data[active].activeTask}
          tasks={data[active].tasks}
        />
      )}
    </>
  );
}
