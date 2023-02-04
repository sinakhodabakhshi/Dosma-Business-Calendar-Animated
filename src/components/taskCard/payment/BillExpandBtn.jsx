import BillExpandIcon from "./BillExpandIcon";

export default function BillExpandBtn({ expanded, handleExpandClick }) {
  return (
    <div
      className="text-[#00bcd4] flex items-center"
      onClick={handleExpandClick}
    >
      <BillExpandIcon expanded={expanded} />

      <p className="ml-[4px] cursor-pointer dark:text-[#AAAAAA]">جزئیات</p>
    </div>
  );
}
