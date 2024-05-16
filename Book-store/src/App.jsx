import { useEffect, useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import axios from 'axios'



function App() {
  const [books,setBooks] = useState([]);
  const createBook = async (bookName)=>{
    try {
      const newData = await axios.post('http://localhost:3000/book/create',{bookName})
      //console.log(newData.data);
      setBooks([...books,newData.data]);
      //console.log(books)
    } catch (error) {
      console.log(error);
    } 
   
  }
  const onDelete = async (_id)=>{
    
    try{
      //console.log(_id);
      const delData = await axios.delete(`http://localhost:3000/book/delete/${_id}`);
      const updatedBooks = books.filter((book)=>{
        return book._id !== _id;
      })
      //console.log(updatedBooks);
      setBooks(updatedBooks);
    }catch(err){

    }
  }
  const onUpdate = async (_id,newTitle)=>{
    //console.log(_id,newTitle);
    try {
      const newData = await axios.put('http://localhost:3000/book/update',{_id,newTitle});
      console.log(newData)  
      const updatedBooks =  books.map((ele)=>{
        if(ele._id === _id){
          return {...ele,...newData.data.book}
        }
        return ele;
    });
    setBooks(updatedBooks);
    } catch (error) {
      console.log(error);
    }
    
  }

  useEffect(()=>{
    const fetchData = async () =>{
      const data2 = await axios.get('http://localhost:3000/book/all');
      setBooks(data2.data);
    }
    fetchData(); 
  },[]);
  return (
    <div className='app' >
      <h1>Reading List</h1>
      <BookList  list={books} onDelete = {onDelete} onUpdate = {onUpdate}/>
      <BookCreate onAdd={createBook}/>
    </div>
  )
}

export default App
         