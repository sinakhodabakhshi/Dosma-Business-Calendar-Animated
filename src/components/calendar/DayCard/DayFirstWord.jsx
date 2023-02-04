import AccessTimeIcon from "@mui/icons-material/AccessTime";

export default function DayFirstWord({ first, dayWord }) {
  return (
    <p className="mb-[6px] mt-[1px] text-[#424242] dark:text-white">
      {" "}
      {first ? (
        <AccessTimeIcon fontSize="inherit" className="p-0 m-0" />
      ) : (
        dayWord
      )}
    </p>
  );
}
