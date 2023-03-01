const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;


// body parser is now built in express.json

app.use(express.json({extended: false}));

app.get("/", (req,res)=> res.send("Hello, World!"));
app.post("/", (req,res)=> res.send(`Hello ${req.body.name}`));

app.get("/hello/:name", (req,res) => res.send(`Hello ${req.params.name}`));


app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));



