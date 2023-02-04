import { useState } from "react";
import BillPreview from "./BillPreview";
import Bill from "./Bill";
import PaymentMethod from "./PaymentMethod";

export default function Payment({ info }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className="flex flex-col py-3 px-2  border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D]">
      <BillPreview
        amount={info.amount}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
      <Bill details={info.bill} expanded={expanded} />
      <PaymentMethod paymentMethod={info.paymentMethod} />
    </div>
  );
}
