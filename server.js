const express = require('express');
const app = express();
const {MongoClient} = require('mongodb');
const PORT = process.env.PORT || 8000;


const articlesInfo = {

"learn-github" : {
    comments: [],
}, 
"learn-python" : {
    comments: [],
}, 
"learn-react" : {
    comments: [],
}

};

// body parser is now built in express.json

app.use(express.json({extended: false}));

app.get("/api/articles/:name", async (req,res)=>{
    try{
        const articleName = req.params.name;
        const client = await MongoClient.connect("mongodb://localhost:27017");
        const db = client.db("research-blog");
        const articleInfo = await db.collection("articles").findOne({name: articleName});
        res.status(200).json(articleInfo);
        client.close();
    }
    catch(err){
        res.status(500).send({message: "Error connecting to database", err})
    }
})

app.post("/api/articles/:name/add-comments", (req,res)=>{

const {username, text} = req.body;
const articleName = req.params.name;
articlesInfo[articleName].comments.push({username,text});
res.status(200).send(articlesInfo[articleName])

});


app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`));



