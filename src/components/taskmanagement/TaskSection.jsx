import TaskMannager from "./TaskMannager";
import { motion, AnimatePresence } from "framer-motion";

export default function TaskSection({ haveActiveTask, tasks }) {
  return (
    <AnimatePresence>
      {haveActiveTask && tasks ? (
        <motion.div
          initial={{
            y: -10,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            opacity: {
              duration: 0.1,
            },
          }}
        >
          <TaskMannager tasks={tasks} />
        </motion.div>
      ) : (
        <motion.p
          initial={{
            y: -7,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.2,
            delay: 0.11,
          }}
          className="bg-slate-100 dark:bg-[#212121] border-x border-x-[#80cbc4] dark:border-x-[#3D3D3D] border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D] text-end pr-4 py-[15px] text-[#424242] dark:text-[#AAAAAA]"
        >
          سفارشی در این روز برای شما ثبت نشده است
        </motion.p>
      )}
    </AnimatePresence>
  );
}
