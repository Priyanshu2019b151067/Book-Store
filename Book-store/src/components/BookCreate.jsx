import React, { useState } from 'react'

function BookCreate({onAdd}) {
  const [bookName,setbookName] = useState('');
  const addBook = (e)=>{
    e.preventDefault();
    onAdd(bookName);
    setbookName('');
  }
  return (
    <div className='book-create'>
        <h3>Add a Book</h3>
        <form onSubmit={addBook}> 
            <input className='input' type="text" onChange={(e) =>{setbookName(e.target.value)}}  value={bookName} />
            <button className='button' onClick={(e) => addBook(e)}>Add Book</button>
        </form>
    </div>
  )
}

export default BookCreate
