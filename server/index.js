import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
// import punycode from 'punycode/'
// const punycode = require('punycode/');
import PostRouter from './routes/posts.js'

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use('/employees',PostRouter);
const CONNECTION_URL = "mongodb+srv://kartikeshsharma59:Kartikesh123@employeesdetails.xh8x5bd.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((err) => console.log('Error connecting to MongoDB:', err.message));