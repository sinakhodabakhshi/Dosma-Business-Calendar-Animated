import CheckIcon from "@mui/icons-material/Check";

export default function Problem({problem}) {
  return (
    <li className="flex justify-end items-center text-[#737171] dark:text-[#AAAAAA]">
      <p>{problem}</p><CheckIcon fontSize="inherit" className="ml-3 dark:text-white" />
    </li>
  );
}
