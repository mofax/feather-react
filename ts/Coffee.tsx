import React from "react";

export default function Coffee(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      {...props}
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  );
}

Coffee.svgString = `<svg
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
  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
  <line x1="6" y1="1" x2="6" y2="4" />
  <line x1="10" y1="1" x2="10" y2="4" />
  <line x1="14" y1="1" x2="14" y2="4" />
</svg>
`;
