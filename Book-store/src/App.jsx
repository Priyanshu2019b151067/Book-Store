import { useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'



function App() {
  const [books,setBooks] = useState([]);
  const createBook = (bookName)=>{
    const updatedBooks = [...books,{id : books.length + 1,bookName}];
    setBooks(updatedBooks);
  }
  const onDelete = (cid)=>{
   const updatedBooks = books.filter((book)=>(
      book.id !== cid
    ));
    setBooks(updatedBooks);
  }
  const onUpdate = (cid,newTitle)=>{
    const updatedBooks =  books.map((ele)=>{
          if(ele.id === cid){
            return {...ele,bookName : newTitle}
          }
          return ele;
      });
      setBooks(updatedBooks);
  }
  return (
    <div className='app' >
      <h1>Reading List</h1>
      <BookList  list={books} onDelete = {onDelete} onUpdate = {onUpdate}/>
      <BookCreate onAdd={createBook}/>
    </div>
  )
}

export default App
