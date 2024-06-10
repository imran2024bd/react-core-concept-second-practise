import './Book.css';
export default function Book({ book }) {
    const { name, price, id } = book;
    // console.log(id, name, price);
    return (
        <div className='book'>
            <h3> Book Name : {name} </h3>
            <p> Book Price : {price} </p>
            <p> Book Serial : {id} </p>
            {/* <h3> Book Name : {book.name} </h3> */}
            {/* <p> Book Price : {book.price} </p> */}
        </div>
    )
}


// 38 - 9 Module Summary And Recap