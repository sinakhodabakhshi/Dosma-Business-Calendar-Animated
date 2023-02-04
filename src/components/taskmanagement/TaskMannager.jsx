import { useEffect, useState } from "react";
import TaskCard from "../taskCard/TaskCard";
import TaskBtnsList from "./TaskBtnsList";
import { motion } from "framer-motion";

export default function TaskMannager({ tasks }) {
  const [active, setActive] = useState(null);

  const handleClick = (e) => {
    if (e.target.tagName === "BUTTON") {
      if (active === e.target.value) setActive(null);
      else setActive(e.target.value);
    }
  };

  //stopping state from saving a task
  useEffect(() => {
    setActive(null);
  }, [tasks]);

  //depend on the order you resive tasks, you should add reverse fucntion to tasks list
  //current order is latest to oldest

  return (
    <>
      <div
        onClick={handleClick}
        className="bg-slate-100 dark:bg-[#212121] border-x border-x-[#80cbc4] dark:border-x-[#3D3D3D] border-b  border-b-[#80cbc4] dark:border-b-[#3D3D3D] rounded-b-lg
         flex flex-row-reverse gap-x-2 gap-y-3 flex-wrap shrink justify-start pt-6 pb-5 px-2 mb-[18px]"
      >
        <TaskBtnsList tasks={tasks} active={active} />
      </div>

      {tasks && tasks[active] && (
        <motion.div
          initial={{
            y: 15,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            opacity: {
              duration: 0.1,
            },
          }}
        >
          <TaskCard task={tasks[active]} />
        </motion.div>
      )}
    </>
  );
}
