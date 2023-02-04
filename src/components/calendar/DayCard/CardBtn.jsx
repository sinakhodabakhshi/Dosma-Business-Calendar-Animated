export default function CardBtn({ id, first, isActive, children }) {
  return (
    <button
      value={id}
      className={`relative border-l border-l-[#80cbc4] dark:border-l-[#3D3D3D] border-y border-y-[#80cbc4] dark:border-y-[#3D3D3D] ${
        first && "border-r border-r-[#80cbc4] dark:border-r-[#3D3D3D]"
      } ${
        isActive &&
        " border-b-slate-100 dark:border-b-[#212121] bg-slate-100 dark:bg-[#212121]"
      } pb-2 w-[100%] `}
    >
      {children}
    </button>
  );
}
