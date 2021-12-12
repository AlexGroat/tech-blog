const router = require('express').Router();
const {
    User,
    Post,
    Comment
} = require('../../models');

// get all posts

// get one post

// create a post
router.post("/", withAuth, (req, res) => {
    console.log("creating");
    Post.create({
            title: req.body.title,
            content: req.body.post_content,
            user_id: req.session.user_id
        })
        .then((dbPostData) => res.json(dbPostData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update post

// delete a post