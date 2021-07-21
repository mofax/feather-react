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

export default function FastForward(
  incomingProps: React.SVGProps<SVGSVGElement>
) {
  const props = Object.assign(defaultProps, incomingProps);

  return (
    <svg {...props}>
      <polygon points="13 19 22 12 13 5 13 19" />
      <polygon points="2 19 11 12 2 5 2 19" />
    </svg>
  );
}

FastForward.svgString = `<svg
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
  <polygon points="13 19 22 12 13 5 13 19" />
  <polygon points="2 19 11 12 2 5 2 19" />
</svg>
`;
