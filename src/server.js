import express from 'express';


//import images database
import './database.js'

const app = express();

app.listen(3000)

console.log('listening on port 3000')