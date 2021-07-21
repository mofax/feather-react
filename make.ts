import fs from "fs/promises";
import * as path from "path";
import { format } from "prettier";

const svgDIR = path.join(process.cwd(), "svg");

function stripProps(str: string) {
  const index = str.indexOf(">");
  const right = str.substring(index + 1);
  return "<svg {...props}>" + right;
}

function componentString(name: string, body: string) {
  const bodyWithProps = stripProps(body);

  return `
        import React from 'react'

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

        export default function ${name}(incomingProps: React.SVGProps<SVGSVGElement>) {
            const props = Object.assign(defaultProps, incomingProps);

            return ${bodyWithProps}
        }

        ${name}.svgString = \`${body}\`
    `;
}

function toCapitalCamelCase(name: string) {
  return name
    .split("-")
    .map((item) => item[0].toUpperCase() + item.substring(1).toLowerCase())
    .join("");
}

async function listFiles() {
  const files = await fs.readdir(svgDIR);
  return files.map((file) => {
    return {
      name: file.substring(0, file.length - 4),
      path: path.join(svgDIR, file),
    };
  });
}

async function readFile(filePath: string) {
  const buf = await fs.readFile(filePath);
  return buf.toString();
}

async function writeTsFile(name: string, contents: string) {
  const fileName = toCapitalCamelCase(name);
  const filePath = path.join(process.cwd(), "ts", `${fileName}.tsx`);
  await fs.writeFile(filePath, contents);
}

async function run() {
  const files = await listFiles();
  const cache: Array<{
    name: string;
    path: string;
    content: string;
  }> = [];
  for (let fileItem of files) {
    const content = await readFile(fileItem.path);
    cache.push({
      content: componentString(toCapitalCamelCase(fileItem.name), content),
      ...fileItem,
    });
  }

  for (let cacheItem of cache) {
    await writeTsFile(cacheItem.name, format(cacheItem.content));
  }
}

run()
  .then(() => console.log("complete"))
  .catch(console.error);
