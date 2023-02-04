import ExpandMore from "../CollapsComponent/ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BillExpandIcon({ expanded }) {
  return (
    <ExpandMore
      expand={expanded}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon
        fontSize="small"
        className="dark:text-[#AAAAAA] text-[#00bcd4]"
      />
    </ExpandMore>
  );
}
