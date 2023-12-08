const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const connectDb = require('./config/db');
const userRoutes = require('./controller/user.controller');
const cors = require('cors');


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use('/api/users',userRoutes);

connectDb().then(()=>{
    console.log('Db connection succeeded');
    app.listen(port,()=>{
        console.log(`listening on port http://localhost:${port}`);
    });
}).catch(err=>console.log(err));

module.exports = app;





