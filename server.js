import 'dotenv/config';

import express from 'express';
import cookieParser from 'cookie-parser';

const port = process.env.PORT || 8080;

const app = express();
app.set('view engine', 'ejs');
app.use(express.json());
app.use(cookieParser());


app.use(express.static('public/'));


app.get('/', (req, res) => {
    res.send('This is the first code with sumit');
});

app.post('/', (req, res) => {
    console.log(req.body);
    res.send('Data received successfully');
}); 

app.param('id', (req, res, next, id) => {
    const user = {
        userId: Number(id),
        name: `User ${Number(id) + 1}`,
    };
    req.user = user;
    next();     
    });

app.get('/user/:id', (req, res) => {
    //console.log(typeof req.params.id);
    const userId = req.params.id;
    //console.log(req.user);
    console.log(req.cookies);          
    //res.send(`Welcome to app, user ${userId}!`);
    res.status(200).send(`Welcome to app, user ${userId}!`);
});

app.get('/about', (req, res) => {
    res.render('page/about', {
        name : 'Turabi_Rahman',
    });
});
    //res.sendStatus(200);


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



app.listen(port, () => console.log(`✅ Server is running on port ${port}`));



// app.set('view engine', 'ejs');





// const myMiddleware = (req, res, next) => {
//     console.log('This is my custom middleware');
//     next();
// };



// app.use(myMiddleware);

// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// };





// // function logRequest(req, res, next) {
// //     console.log(`${req.method} ${req.url}`);
// //     next();
// // }

// //app.use(logRequest);

// app.get('/middleware', (req, res) => {
//     res.send('This route uses custom middleware');
// });
