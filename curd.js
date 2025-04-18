const express = require("express");
const app = express();

let books = [
  {
    id: 1,
    title: "The Alchemist",
    author: "author 1",
  },
  {
    id: 2,
    title: "The Secret",
    author: "Author 2",
  }
];

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Read all books
app.get('/', (req, res) => {
  res.json(books);
});

// ✅ Create a new book
app.post('/books', (req, res) => {
    console.log("Request Body:", req.body); // Log incoming request body
    
    const newBook = req.body;
    
  
    newBook.id = books.length + 1;
    books.push(newBook);
    res.status(201).json(newBook);
  });
  
// put method to update a book
app.put('/books/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const updatedBook = req.body;
    const index = books.findIndex(book=>book.id === id);
    if(index !== -1){
        books[index] = {...books[index], ...updatedBook};
        res.json(books[index]);
    }
    else{
        res.status(404).json({message: "Book not found"});
    }
})
// delete method to delete a book
app.delete('/books/:id',(req,res)=>{
const id = parseInt(req.params.id);
const index = books.findIndex(book=>book.id === id);
if(index !== -1){
    const deletedBook = books[index];
    // Remove the book from the array
    books.splice(index,1);
    res.json(deletedBook);
    
}
else{
    res.status(404).json({message: "Book not found"});

}
})
// ✅ Start server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
