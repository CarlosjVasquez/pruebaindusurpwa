export function currencyFormatter({ currency, value }) {
  const val = value.replace(/[$]/g, '');
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    minimumFractionDigits: 2,
    currency,
  });
  return formatter.format(val);
}

export function onlyNumber(value: string) {
  return value.replace(/[^.,\d]/g, '');
}

export function numbersValidation(value: string) {
  return value.replace(/[^0-9]/g, '');
}

export function formatNumber(number: string) {
  const numberValidate = onlyNumber(number);
  const num_parts = numberValidate
    .toString()
    .replace(/\./g, '')
    .split(',')
    .slice(0, 2);
  num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  if (num_parts[1])
    num_parts[1] = Math.round(Number(num_parts[1])).toString().slice(0, 2);
  return num_parts.join(',');
}

export const DataSales = [];
