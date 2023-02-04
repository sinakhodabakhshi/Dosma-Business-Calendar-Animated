import PhoneIcon from "@mui/icons-material/Phone";

export default function CallBtn({ phoneNumber }) {
  return (
    <a
      href={`tel:+98${phoneNumber}`}
      className="border-2 border-[#00bcd4] rounded-full py-[3px] px-[4px] shrink-0"
    >
      <PhoneIcon />
    </a>
  );
}
