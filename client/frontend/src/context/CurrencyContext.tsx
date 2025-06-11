import { createContext, useState, type ReactNode, useEffect } from "react";
import { fetchExchangeRates, type ExchangeRates } from "../services/exchangeRates";

export type Currency = "USD" | "EUR";

interface CurrencyContextType {
  currency: Currency;
  toggleCurrency: () => void;
  rates: ExchangeRates;
}

export const CurrencyContext = createContext<CurrencyContextType>({
  currency: "USD",
  toggleCurrency: () => {},
  rates: { USD: 1, EUR: 0.1 },
});

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<Currency>("USD");
  const [rates, setRates] = useState<ExchangeRates>({ USD: 1, EUR: 0.1 });

  useEffect(() => {
    (async () => {
      const data = await fetchExchangeRates();
      setRates(data);
    })();
  }, [currency]);

  const toggleCurrency = () => {
    setCurrency(curr => curr === "USD" ? "EUR" : "USD");
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency, rates }}>
      {children}
    </CurrencyContext.Provider>
  )
}
