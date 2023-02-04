import BillExpandBtn from "./BillExpandBtn";
import PreviewTitle from "./PreviewTitle";

export default function BillPreview({ amount, expanded, handleExpandClick }) {
  return (
    <div className="flex justify-between items-center w-[100%]">
      <BillExpandBtn
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
      <PreviewTitle amount={amount} />
    </div>
  );
}
