const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.get('/', (req, res) => {
    res.send({message: "Hello World!"});
})

app.listen(process.env.PORT, () => {
    console.log("server started at port 3000");
})