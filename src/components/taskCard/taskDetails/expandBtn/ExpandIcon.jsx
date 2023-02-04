import ExpandMore from "../../CollapsComponent/ExpandMore";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function ExpandIcon({ expanded }) {
  return (
    <ExpandMore
      expand={expanded}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon className=" dark:text-white" />
    </ExpandMore>
  );
}
