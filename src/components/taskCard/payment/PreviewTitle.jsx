import CreditCardIcon from "@mui/icons-material/CreditCard";

export default function PreviewTitle({ amount }) {
  return (
    <div className="flex space-x-2 mr-[-2px]">
      <p className="flex">
        <span className="text-[#8c8c8c] pr-1 font-bold">تومان</span>
        <span className="font-bold">{amount}</span>
        <span className="font-bold pl-2">:هزینه کارشناسی</span>
      </p>
      <CreditCardIcon
        fontSize="medium"
        className="text-[#424242] dark:text-[#AAAAAA]"
      />
    </div>
  );
}
