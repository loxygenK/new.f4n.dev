export type ClassName = string | false;
export function classNames(...classNameList: Array<ClassName>) {
  return classNameList.filter((c) => c !== false).join(" ");
}
