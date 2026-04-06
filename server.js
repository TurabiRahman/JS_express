import 'dotenv/config';

import express from 'express';
import path from 'path';
import posts from './routes/posts.js';


const port = process.env.PORT || 8080;


const app = express();

//body paser  middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

app.use('/api/posts', posts);


app.listen(port, () => console.log(`Server is running on port ${port}`));