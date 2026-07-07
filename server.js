import 'dotenv/config';

import express from 'express';
import multer from 'multer';
import path from 'path';
// import cookieParser from 'cookie-parser';

const port = process.env.PORT || 8080;

const app = express();

const storage = multer.diskStorage({
    destination: (req, file, cb) => 
    { 
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) =>
    {
         const fileExt = path.extname(file.originalname);
         const fileName = file.originalname
            .replace(fileExt, '')
            .toLowerCase()
            .split(' ')
            .join('-') + '-' + Date.now() + fileExt;
         cb(null, fileName);
    }
});



const upload = multer
({ 
    storage: storage,
    limits: 
    { 
        fileSize: 1000000 
    },  // 1MB
    fileFilter: (req, file, cb) => 
    {
        if
        (
            file.mimetype === 'image/jpeg' || 
            file.mimetype === 'image/png'
        )
        {
            cb(null, true);
        }   
        else
        {
            cb(new Error('Only JPEG and PNG files are allowed'));
        }
    }         
});

// app.post('/', upload.fields
// ([
//     { name: "avatar", maxCount: 1 },
//     { name: 'gallery', maxCount: 2 }
// ]), 
//     (req, res) => 
// {
//     res.send(`File uploaded successfully`);
// });

app.post('/', upload.single('name'), (req, res) => 
{
    res.send('File uploaded successfully.');
});

app.use((err, req, res, next) =>
{
    if(err)
    {
        if(err instanceof multer.MulterError)
        {
            res.status(500).send("there was an error uploading the file: " + err.message);
        }
        else
        {
            res.status(500).send(err.message);
        }
    }
    else
    {
        res.send("Success");
    }
});

app.listen(port, () => console.log(`✅ Server is running on port ${port}`));



// if (!req.file) {
    //     return res.status(400).send('No file uploaded.');
    // }
    // res.send('File uploaded successfully.');


// app.set('view engine', 'ejs');
// app.use(express.json());
// app.use(cookieParser());


// const logger = (req, res, next) => {
//     console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.url} - ${req.protocol} - ${req.ip}`);
//     next();
// }

// app.use(logger);


// app.use(express.static('public/'));


// app.get('/', (req, res) => {
//     res.send('This is the first code with sumit');
// });

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send('Data received successfully');
// }); 

// app.param('id', (req, res, next, id) => {
//     const user = {
//         userId: Number(id),
//         name: `User ${Number(id) + 1}`,
//     };
//     req.user = user;
//     next();     
//     });

// app.get('/user/:id', (req, res) => {
//     //console.log(typeof req.params.id);
//     const userId = req.params.id;
//     //console.log(req.user);
//     console.log(req.cookies);          
//     //res.send(`Welcome to app, user ${userId}!`);
//     res.status(200).send(`Welcome to app, user ${userId}!`);
// });

// app.get('/about', (req, res) => {
//     res.render('page/about', {
//         name : 'Turabi_Rahman',
//     });
// });
//     //res.sendStatus(200);


//     app.get('/contact', (req, res) => {
//     res.format({
//         'text/plain': () => {
//             res.send('HI');
//         },
//         'text/html': () => {
//             res.render('page/about', {
//                 name : 'Mizanur Rahman',
//             });
//         },
//         'application/json': () => {
//             res.json({ message: 'You are not around the world' });
//         },
//         default: () => {
//             res.status(406).send('Not Acceptable');
//         }
//     });
// });

// const myMiddleware1 = (req, res, next) => {
//     console.log('This is my custom middleware number 01');
//     next();
// };

// const myMiddleware2 = (req, res, next) => {
//     console.log('This is my custom middleware number 02');
//     next();
// };

// app.use(myMiddleware1);
// app.use(myMiddleware2);

// app.get('/middleware', (req, res) => {
//     res.send(a); //'This route uses custom middleware'
// });

// app.use((err, req, res, next) => {
//     if(err.message) {
//         res.status(500).send(err.message);
//     }
//     else {
//         res.status(500).send('There was an error Error');
//     }
// });


