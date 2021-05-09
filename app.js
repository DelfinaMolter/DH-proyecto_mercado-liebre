const path = require('path');
const express = require ('express');
const app =express ();

app.listen(3000, ()=> console.log('Servidor corriendo en http://localhost:3000'));
app.use(express.static(path.resolve(__dirname,'./public')));
app.get('/', (req,res)=>res.sendFile(path.resolve(__dirname,'./views/home.html')))