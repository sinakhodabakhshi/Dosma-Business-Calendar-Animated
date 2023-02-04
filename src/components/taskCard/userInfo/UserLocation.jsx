import RoomRoundedIcon from "@mui/icons-material/RoomRounded";

//you can remove flex-row-reverse and change the order of element and get the same resault
export default function UserLocation({ address }) {
  return (
    <p className="flex flex-row-reverse pb-2 leading-7 line text-sm text-end">
      <span className="pl-2">
        <RoomRoundedIcon
          fontSize="small"
          className="border-black mr-[-3px] text-[#00bcd4]"
        />
      </span>
      <span>{address}</span>
    </p>
  );
}
