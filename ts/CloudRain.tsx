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

export default function CloudRain(
  incomingProps: React.SVGProps<SVGSVGElement>
) {
  const props = Object.assign(defaultProps, incomingProps);

  return (
    <svg {...props}>
      <line x1="16" y1="13" x2="16" y2="21" />
      <line x1="8" y1="13" x2="8" y2="21" />
      <line x1="12" y1="15" x2="12" y2="23" />
      <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
    </svg>
  );
}

CloudRain.svgString = `<svg
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
  <line x1="16" y1="13" x2="16" y2="21" />
  <line x1="8" y1="13" x2="8" y2="21" />
  <line x1="12" y1="15" x2="12" y2="23" />
  <path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25" />
</svg>
`;
