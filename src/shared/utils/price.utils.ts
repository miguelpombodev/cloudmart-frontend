export function ConvertToCurrency(
  value: number,
  country: string = "pt-BR",
  currency: string = "BRL",
): string {
  const formatter = new Intl.NumberFormat(country, {
    style: "currency",
    currency,
  });

  return formatter.format(value);
}
