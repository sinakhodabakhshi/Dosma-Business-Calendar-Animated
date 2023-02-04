import React from "react";

export default function Description({ description }) {
  return (
    <p className="text-end">
      <span>توضیحات</span>:{" "}
      <span className="text-[#737171] dark:text-[#AAAAAA]">{description}</span>
    </p>
  );
}
