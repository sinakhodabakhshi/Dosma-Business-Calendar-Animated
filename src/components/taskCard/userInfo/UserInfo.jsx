import Btns from "./sectionBtns/Btns";
import UserLocation from "./UserLocation";

export default function UserInfo({ user }) {
  return (
    <div className="flex flex-col space-y-1 items-end py-4 px-2 border-b border-b-[#80cbc4] dark:border-b-[#3D3D3D]">
      <p className="font-bold text-sm" >{user.name}</p>
      <UserLocation address={user.address} />
      <Btns phoneNumber={user.phoneNumber} />
    </div>
  );
}
