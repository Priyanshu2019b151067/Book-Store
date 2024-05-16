const express = require('express');
const cors = require('cors')
const app = express();
const bookRouter = require('./routes/book')

app.use(cors({
    origin : '*'
}))
app.use(express.json());

app.use('/book',bookRouter);

app.listen(3000,()=>{
    console.log('server running');
})


