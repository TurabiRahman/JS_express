import 'dotenv/config';

import express from 'express';


const port = process.env.PORT || 8080;


const app = express();
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('This is the first code with sumit');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Data received successfully');
}); 


app.listen(port, () => console.log(`Server is running on port ${port}`));