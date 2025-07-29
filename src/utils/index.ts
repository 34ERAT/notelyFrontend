export function hasEmpty(values: string[]) {
  for (const item of values) {
    if (item.length == 0) return true;
  }
  return false;
}
export function isEmpty(values: string) {
  return values.length == 0 ? true : false;
}
