const express = require('express'); 
const bodyParser = require('body-parser');
require('dotenv').config();
const connectDb = require('./config/db');
const userRoutes = require('./controller/user.controller');
const app = express();  
const PORT = process.env.PORT;

const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use('/api/users',userRoutes);


connectDb().then(async () => {
  console.log('MongoDb connected');
    app.listen(PORT, () => {
    console.log(`Server is listening on port localhost:${PORT}`);
  });
}).catch(err => console.log(err));