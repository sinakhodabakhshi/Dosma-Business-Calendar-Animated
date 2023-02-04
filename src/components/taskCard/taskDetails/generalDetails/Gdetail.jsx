import React from "react";

export default function Gdetail({ title, value }) {
  return (
    <p className="flex justify-end items-center text-center">
      <span className="text-[#737171] dark:text-[#AAAAAA]">{value}</span>&nbsp;:
      <span>{title}</span>
    </p>
  );
}
