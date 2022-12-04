import React from 'react'
import Book from './Book/Book'

interface BooksProps{
    bookList: {
        id: string
        title: string
        price: number
    }[]
}
const Books: React.FC<BooksProps> = (props) => {
  return <ul>
    {props.bookList.map(book => (
        <Book key={book.id} bookDetail={book}/>
    ))}
  </ul>
}

export default Books