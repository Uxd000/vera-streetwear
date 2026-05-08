import { useCurrency } from "../../context/CurrencyContext";

export default function CurrencySwitcher() {
  const {
    currency,
    setCurrency,
  } = useCurrency();

  return (
    <select
      value={currency}
      onChange={(e) =>
        setCurrency(e.target.value)
      }
      className="border-none bg-transparent text-xs uppercase tracking-[0.2em] outline-none"
    >
      <option value="INR">INR</option>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="GBP">GBP</option>
    </select>
  );
}