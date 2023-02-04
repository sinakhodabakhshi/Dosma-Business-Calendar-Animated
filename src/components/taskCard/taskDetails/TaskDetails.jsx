import { useState } from "react";
import ExpandBtn from "./expandBtn/ExpandBtn";
import Details from "./Details";

export default function TaskDetails({ details }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <ExpandBtn expanded={expanded} handleExpandClick={handleExpandClick} />
      <Details details={details} expanded={expanded} />
    </div>
  );
}
