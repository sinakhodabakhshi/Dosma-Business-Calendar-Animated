import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Header() {
  return (
    <header className="relative flex justify-center items-center h-12 ">
      <h1 className=" font-bold">تقویم کاری</h1>
      <button className=" absolute right-0">
        <ArrowForwardIcon />
      </button>
    </header>
  );
}
