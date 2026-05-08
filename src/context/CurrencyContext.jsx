import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const CurrencyContext = createContext();

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState("INR");

  const [rates, setRates] = useState({
    INR: 1,
  });

  useEffect(() => {
    async function fetchRates() {
      try {
        const response = await fetch(
          "https://open.er-api.com/v6/latest/INR"
        );

        const data = await response.json();

        setRates(data.rates);
      } catch (error) {
        console.error(
          "Failed to fetch exchange rates:",
          error
        );
      }
    }

    fetchRates();
  }, []);

  function convertPrice(priceINR) {
    const rate = rates[currency];

    if (!rate) return priceINR;

    return (priceINR * rate).toFixed(2);
  }

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        convertPrice,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  return useContext(CurrencyContext);
}