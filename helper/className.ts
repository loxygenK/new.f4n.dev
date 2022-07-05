export function addClass(element: HTMLElement, className: string) {
  const classNames = getClassNames(element);

  if(classNames.indexOf(className) === -1) {
    classNames.push(className);
  }

  setClassNames(element, classNames);
}


export function removeClass(element: HTMLElement, className: string) {
  const classNames = getClassNames(element)
    .filter((c) => c !== className);

  setClassNames(element, classNames);
}

function getClassNames(element: HTMLElement): string[] {
  return element.className.split(" ");
}

function setClassNames(element: HTMLElement, classNames: string[]) {
  element.className = classNames.join(" ");
}
