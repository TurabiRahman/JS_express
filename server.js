import 'dotenv/config';

import express from 'express';


const port = process.env.PORT || 8080;


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('This is the first code with sumit');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Data received successfully');
}); 

app.param('id', (req, res, next, id) => {
    const user = {
        userId: id,
        name: `User ${id + 1}`,
    };
    req.user = user;
    next();     
    });

app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    console.log(req.user);          
    res.send(`Welcome to app, user ${userId}!`);
});

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    res.render('page/about', {
        name : 'Turabi_Rahman',
    });

    //res.sendStatus(200);
});

app.get('/contact', (req, res) => {
    res.format({
        'text/plain': () => {
            res.send('HI');
        },
        'text/html': () => {
            res.render('page/about', {
                name : 'Mizanur Rahman',
            });
        },
        'application/json': () => {
            res.json({ message: 'You are not around the world' });
        },
        default: () => {
            res.status(406).send('Not Acceptable');
        }
    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));