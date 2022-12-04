import React, { useState } from 'react'
import Books from '../components/Books/Books';
import CurrencyContext from '../context/currency/currency';

interface currencyState{
    symbol: string
    label: string
}

const DATA = [
    {
      id: '1',
      title: 'The Road to React',
      price: 19.99,
    },
    {
      id: '2',
      title: 'The Road to GraphQL',
      price: 29.99,
    },
  ];
  const CURRENCIES = {
    Euro: {
      symbol: '€',
      label: 'Euro',
    },
    Usd: {
      symbol: '$',
      label: 'US Dollar',
    },
  };

const Bookstore = () => {
    const [currency, setCurrency] = useState<currencyState>(CURRENCIES.Euro)

  return (
    
        <CurrencyContext.Provider value="$">
            <button
                type="button"
                onClick={()=>setCurrency(CURRENCIES.Euro)}
            >
                {CURRENCIES.Euro.label}
            </button>

            <button
                type="button"
                onClick={()=>setCurrency(CURRENCIES.Usd)}
            >
                {CURRENCIES.Usd.symbol}
            </button>
            <Books bookList={DATA}/>
        </CurrencyContext.Provider>
  )
}

export default Bookstore