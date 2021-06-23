require('dotenv').config();
const express =require('express');
const bodyParser = require('body-parser');
const { createFavorite } = require('./config/database/createDB');
const router = require('./api/routes/favorite');


const app = express();

createFavorite();

app.use(bodyParser.json())
app.use('/books',router)


const port = process.env.PORT || 3005


app.get('/', (req, res) =>{
    res.send('Todo va bien')
    
});




app.listen( port, () =>{
    console.log(`listening at ${port}`)
})

