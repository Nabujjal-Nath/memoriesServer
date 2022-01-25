import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import mongoose from "mongoose";
import postRoutes from './routes/post.js'
const app = express();

app.use('/posts', postRoutes); //Every routes defined in routes/post.js file will have prefix /posts e.g. http://localhost:4000/posts
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://memories:Zxcvbnm123!@cluster0.9kdtz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => { console.log(`Server is up at port:${PORT}`) }))
    .catch((error) => console.log(error.message))
