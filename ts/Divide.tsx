import React from "react";

const defaultProps = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export default function Divide(incomingProps: React.SVGProps<SVGSVGElement>) {
  const props = Object.assign(defaultProps, incomingProps);

  return (
    <svg {...props}>
      <circle cx="12" cy="6" r="2" />
      <line x1="5" y1="12" x2="19" y2="12" />
      <circle cx="12" cy="18" r="2" />
    </svg>
  );
}

Divide.svgString = `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <circle cx="12" cy="6" r="2" />
  <line x1="5" y1="12" x2="19" y2="12" />
  <circle cx="12" cy="18" r="2" />
</svg>
`;
