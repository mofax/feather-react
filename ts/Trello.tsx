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

export default function Trello(incomingProps: React.SVGProps<SVGSVGElement>) {
  const props = Object.assign(defaultProps, incomingProps);

  return (
    <svg {...props}>
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <rect x="7" y="7" width="3" height="9" />
      <rect x="14" y="7" width="3" height="5" />
    </svg>
  );
}

Trello.svgString = `<svg
  viewBox="0 0 24 24"
  width="24"
  height="24"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
  <rect x="7" y="7" width="3" height="9" />
  <rect x="14" y="7" width="3" height="5" />
</svg>
`;
