const express = require('express'); 
const bodyParser = require('body-parser');

const connectDb = require('./config/db');
const userRoutes = require('./controller/user.controller');
const app = express();  
const port = 3000;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());
app.use('/api/users',userRoutes);


connectDb().then(async () => {
  console.log('MongoDb connected');
    app.listen(3000, () => {
    console.log(`Server is listening on port localhost:${port}/api/users`);
  });
}).catch(err => console.log(err));