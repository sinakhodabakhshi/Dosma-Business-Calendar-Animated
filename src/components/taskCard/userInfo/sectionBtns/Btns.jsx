import CallBtn from "./CallBtn";
import CancelBtn from "./CancelBtn";
import LocationBtn from "./LocationBtn";

//set flex-row-reverse to match right to left order(fa)
//you can  remove it and change btn order

export default function Btns({ phoneNumber, location }) {
  return (
    <div className="flex flex-row-reverse text-[#00bcd4] space-x-reverse space-x-2 w-[100%]">
      <CallBtn phoneNumber={phoneNumber} />
      <LocationBtn location="" />
      <CancelBtn />
    </div>
  );
}
