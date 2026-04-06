import express from 'express';
const router = express.Router();

let posts = [
    {id : 1, title: "Post one"},
    {id : 2, title: "Post two"},
    {id : 3, title: "Post three"},
];


router.get('/', (req, res) => {
    const limit = parseInt(req.query.limit);

    if(!isNaN(limit) && limit > 0)
    {
        res.json(posts.slice(0, limit));
    }
    else
    {
        res.json(posts);
    }
});

router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find((post) => post.id === id);

    if(!post)
    {
        res.status(404).json({msj : `A post with id : ${id} was not found`});
    }
    else
    {
        res.status(200).json(post);
    }

    //res.json(posts.filter((post) => post.id === id));
});

//create new post

router.post('/', (req, res) => {
    console.log(req.body);

    res.status(201).json(posts);
})

export default router;