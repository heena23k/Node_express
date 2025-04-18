const express = require('express');
const app  = express();
const path = require('path');
const phone = require('./data');

// app.get('/',(req,res)=>{
//     res.json([{
//         fname:"John",
//         lname:"Doe",
//         age:30,
//     },
//     ])
// })
// app.get('/',(req,res)=>{
//     // res.json(phone)
//     res.send("<h1>Home page..</h1><a href ='/api/phone>'> phones</a>")
// })

// app.get('/api/phone/:phoneId',(req,res)=>{
//     // const newItem = phone.map((product)=>{
//     //     const {id,name,image} = product
//     //     return {id,name,image}
//     // })
//     // // res.json(phone)
//     // res.json(newItem)
//     // params 
//     console.log(req.params);
    
//     const singleProduct = phone.find((product)=> product.id === Number(req.params.id))
//     if(!singleProduct){
//         return res.status(404).send("Product not found")
//     }
    // res.json(singleProduct)

// })

// query string
app.get('/api/v1/query',(req,res)=>{
    let sortedProducts = [...phone]
    const {search,limit} = req.query;
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
            return product.name.startsWith(search)
        })
    }
    res.json(sortedProducts)
    res.send("Hello world")
    console.log(req.query);

})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})