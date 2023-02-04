export default function DayInfo({ isCurrent, day }) {
  return (
    <>
      <p className="text-[11px] text-[#00bcd4] h-5">{isCurrent && "امروز"}</p>

      <p
        className={`${
          isCurrent
            ? "text-[#424242] dark:text-white"
            : "text-[#bdbdbd] dark:text-[#AAAAAA]"
        }`}
      >
        {day}
      </p>
    </>
  );
}
