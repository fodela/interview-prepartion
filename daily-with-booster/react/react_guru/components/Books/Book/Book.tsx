import React from 'react'
import CurrencyContext from '../../../context/currency/currency'

interface BookProps{
    bookDetail:{
        id: string
        title: string
        price: number
    }
}
const Book: React.FC<BookProps> = ({bookDetail}) => {
  return (
    <CurrencyContext.Consumer>
        {
            currency => (
                <li>bookDetail.title - {currency}{bookDetail.price}</li>
            )
        }

    </CurrencyContext.Consumer>
  )
}

export default Book