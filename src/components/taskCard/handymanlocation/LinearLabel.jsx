import DirectionsRunRoundedIcon from "@mui/icons-material/DirectionsRunRounded";

export default function LinearLabel() {
  return (
    <div className="flex items-center px-1 dark:text-white">
      <DirectionsRunRoundedIcon fontSize="large" />
      <p className="scale-x-[-1] text-sm"> در مسیر رسیدن به محل</p>
    </div>
  );
}
