import Collapse from "@mui/material/Collapse";
import BillItem from "./BillItem";

export default function Bill({ details, expanded }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <div className="flex flex-col mt-5 ">
        {details.map((detail) => (
          <BillItem
            key={detail.id}
            title={detail.title}
            amount={detail.amount}
          />
        ))}
      </div>
    </Collapse>
  );
}
