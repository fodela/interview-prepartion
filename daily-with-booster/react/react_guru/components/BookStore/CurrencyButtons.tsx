import React from "react";
import currencyInterface from "../../typesInterfaces/currencyInterface";

const CURRENCIES = {
  Euro: {
    code: "EUR",
    label: "Euro",
    conversionRate: 1, // base conversion rate
  },
  Usd: {
    code: "USD",
    label: "US Dollar",
    conversionRate: 1.19,
  },
};

const CurrencyButtons = ({ onChange }) => {
  return (
    <>
      {Object.values(CURRENCIES).map((item) => (
        <button type="button" key={item.label} onClick={() => onChange(item)}>
          {item.label}
        </button>
      ))}
    </>
  );
};

export default CurrencyButtons;
