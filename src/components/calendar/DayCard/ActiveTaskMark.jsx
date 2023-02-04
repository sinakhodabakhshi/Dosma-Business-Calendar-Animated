export default function ActiveTaskMark({ activeTask }) {
  return (
    <>
      {activeTask && (
        <div className="absolute left-1 top-1 w-[5px] h-[5px] rounded-full bg-[#A7AB0A]" />
      )}
    </>
  );
}
