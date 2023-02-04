import ExpandIcon from "./ExpandIcon";

export default function ExpandBtn({ expanded, handleExpandClick }) {
  return (
    <div
      onClick={handleExpandClick}
      className={`w-[100%] py-[6px] cursor-pointer text-end bg-slate-100 dark:bg-[#282828] ${
        !expanded && "rounded-b-lg"
      } ${
        expanded && "border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D] "
      } px-2 border-b-[#80cbc4]`}
    >
      <ExpandIcon expanded={expanded} />
      <span className="ml-2 cursor-pointer ">مشاهده جزئیات سفارش</span>
    </div>
  );
}
