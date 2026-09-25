export function CapitalizeString(value: string): string {
  const newString = value[0].toUpperCase() + value.slice(1);

  return newString;
}
