// to create an server
const express = require("express");
// create an instance of express
const app = express();
const path = require('path');
// app.get('/',(req,res)=>{
//     res.send('<h1> Hello Word!</h1>')
// })
// app.get('/contact',(req,res)=>{
//     res.send('<h1> contact</h1>')
// })
// app.get('/files',(req,res)=>{
//     res.sendFile(path.join(__dirname,'index.html'))
// })
// app.get('/jsonexample',(req,res)=>{
//     res.json([{name:'John',age:30,city:'New York'},
// {name:'Jane',age:25,city:'Los Angeles'}, {name:'Mike',age:35,city:'Chicago'}])

// })
// send folder complete use the express.static method as a middleware

app.use(express.static('example'))
// only send file 
// app.get('/',(req,res)=>{
//     res.sendFile(path.join(__dirname, 'example','index.html'))
// })

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
