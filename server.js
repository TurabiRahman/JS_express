import 'dotenv/config';

import express from 'express';
// import path from 'path';
// import posts from './routes/posts.js';


const port = process.env.PORT || 8080;


const app = express();
app.use(express.json());


//app.use(express.urlencoded({extended : false}));
//app.use(express.static(path.join(__dirname, 'public')))

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });


//app.use('/api/posts', posts);



app.get('/', (req, res) => {
    res.send('This is the first code with sumit');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Data received successfully');
}); 


app.listen(port, () => console.log(`Server is running on port ${port}`));