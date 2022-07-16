export type ClassName = string;
export function classNames(...classNameList: Array<ClassName>) {
  return classNameList.join(" ");
}
