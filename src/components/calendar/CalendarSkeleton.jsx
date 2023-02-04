import { Skeleton } from "@mui/material";

export default function CalendarSkeleton() {
  return (
    <div className="space-y-[22px]">
      <Skeleton
        variant="rectangular"
        className=" rounded-t-md"
        animation="wave"
        height={25}
      />
      <Skeleton variant="rectangular" animation="wave" height={100} />
    </div>
  );
}
