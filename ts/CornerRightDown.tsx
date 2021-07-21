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

export default function CornerRightDown(
  incomingProps: React.SVGProps<SVGSVGElement>
) {
  const props = Object.assign(defaultProps, incomingProps);

  return (
    <svg {...props}>
      <polyline points="10 15 15 20 20 15" />
      <path d="M4 4h7a4 4 0 0 1 4 4v12" />
    </svg>
  );
}

CornerRightDown.svgString = `<svg
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
  <polyline points="10 15 15 20 20 15" />
  <path d="M4 4h7a4 4 0 0 1 4 4v12" />
</svg>
`;
