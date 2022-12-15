import React, { useContext } from "react";
import { CurrencyContext } from "../../../../context/currency/currency";

interface BookProps {
  bookDetail: {
    id: string;
    title: string;
    price: number;
  };
}
const Book: React.FC<BookProps> = ({ bookDetail }) => {
  const currency = useContext(CurrencyContext);

  return (
    <li>
      {bookDetail.title} - {currency.symbol}
      {bookDetail.price}
    </li>
  );
};

export default Book;
