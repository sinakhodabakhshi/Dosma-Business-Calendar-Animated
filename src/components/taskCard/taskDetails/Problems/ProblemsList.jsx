import React from "react";
import Problem from "./Problem";

export default function ProblemsList({ problems }) {
  return (
    <div className="text-end">
      <p className="mt-2 mb-4">:{problems.title}</p>
      <ul className="space-y-2">
        {problems.values.map((problem) => (
          <Problem key={problem.id} problem={problem.text} />
        ))}
      </ul>
    </div>
  );
}
