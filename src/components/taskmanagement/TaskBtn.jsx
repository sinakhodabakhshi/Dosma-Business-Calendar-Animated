import { motion } from "framer-motion";

export default function TaskBtn({ taskDetail, isActive, index }) {
  const { task, time, id } = taskDetail;

  return (
    <motion.button
      initial={{
        x: 10,
        opacity: 0,
      }}
      animate={{
        x: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.3,
        delay: index / 50,
      }}
      value={id}
      className={`rounded-full border font-semibold  py-[6px] px-4 ${
        isActive
          ? "border-[#00bcd4] text-[#00bcd4]"
          : "border-[#9e9e9e] text-[#9e9e9e]"
      }`}
    >
      {`${time} - ${task}`}
    </motion.button>
  );
}
