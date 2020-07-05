export default function priceFormat(price) {
  const priceFloat = (price / 100).toFixed(2)
  return new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  }).format(priceFloat)
}
