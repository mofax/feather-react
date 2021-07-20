import fs from "fs/promises";
import * as path from "path";
import { format } from "prettier";

const svgDIR = path.join(process.cwd(), "svg");

function componentString(name: string, body: string) {
  // hack to add props
  const bodyWithProps = body.replace(">", "{...props}>");

  return `
        import React from 'react'

        export default function ${name}(props: React.SVGProps<SVGSVGElement>) {
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
