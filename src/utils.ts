export function classNames(...classes: (string | Boolean)[]) {
  return classes.filter(Boolean).join(' ');
}
