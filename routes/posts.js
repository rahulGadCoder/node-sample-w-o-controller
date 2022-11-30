const express = require('express');
const router = express.Router();

const Post = require('../model/posts');

router.get('/', async (req, res) => {
    try {
        const posts = await Post.find();
        res.json(posts)
    } catch (error) {
        res.json({ message: err })
    }
});

router.get('/:postId', async (req, res) => {
    try {
        const posts = await Post.findById(req.params.postId);
        res.json(posts)
    } catch (error) {
        res.json({ message: err })
    }
})

router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
    });

    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (error) {
        res.json({ message: err })
    }
});


router.patch('/:postId', async (req, res) => {
    try {
        const updatedPost = await Post.updateOne(
            { _id: req.params.postId },
            {
                $set: {
                    title: req.body.title,
                    description: req.body.description,
                }
            }
        );
        res.json(updatedPost)
    } catch (error) {
        res.json({ message: err })
    }
})


router.delete('/:postId', async (req, res) => {
    try {
        const removePost = await Post.deleteOne({ __id: req.params.postId });
        res.json(removePost);
    } catch (error) {
        res.json({ message: err })
    }
})



module.exports = router;