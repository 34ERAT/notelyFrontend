import TurndownService from "turndown";

import { marked } from "marked";

export function hasEmpty(values: string[]) {
  console.log(values);
  for (const item of values) {
    if (item.length == 0) return true;
  }
  return false;
}
export function isEmpty(values: string) {
  return values.length == 0 ? true : false;
}
export function toMarkDown(value: string) {
  const turndownService = new TurndownService();

  return turndownService.turndown(value);
}
export async function toHtml(value: string) {
  return await marked(value);
}
