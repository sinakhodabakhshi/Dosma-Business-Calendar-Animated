import { Collapse } from "@mui/material";
import GeneralInfoList from "./generalDetails/GeneralInfoList";
import ProblemsList from "./Problems/ProblemsList";
import Description from "./Description";

export default function Details({ details, expanded }) {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <div className="flex flex-col text-sm px-2 p-4 pb-5 space-y-4">
        <GeneralInfoList general={details.general} />
        <ProblemsList problems={details.problems} />

        {details.description && (
          <Description description={details.description} />
        )}
      </div>
    </Collapse>
  );
}
