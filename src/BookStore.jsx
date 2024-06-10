import Book from "./Book"
export default function BookStore({ books }) {
    return (
        <div>
            <h3> Books : {books.length} </h3>
            {/* <p>Books Name : {books.name} </p> */}
            {
                books.map(book => <Book book={book}></Book>)
            }

        </div>
    )
}
