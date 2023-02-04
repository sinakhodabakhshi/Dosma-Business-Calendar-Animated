export default function BillItem({ title, amount }) {
  return (
    <div className="flex flex-row-reverse p-2 text-sm border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D] justify-between">
      <p>{title}</p>
      <p className="flex">
        <span className="text-[#bdbdbd] pr-1">تومان</span> <span>{amount}</span>
      </p>
    </div>
  );
}
