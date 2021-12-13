const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models/index');

const userSeedData = require('./userDataSeeds.json');
const commentSeedData = require('./commentDataSeeds.json');
const postSeedData = require('./postDataSeeds.json');

const seedDb = async() => {
    await sequelize.sync({ force: true });

    const users = await User.bulkCreate(userSeedData, {
        individualHooks: true,
        returning: true,
    });

    for (const post of postSeedData) {
        await Post.create({
            ...post,
            user_id: users[Math.floor(Math.random() * userSeedData.length)].id,
        });
    }

        const numbPost = await Post.count();

    for (const comment of commentSeedData) {
        await Comment.create({
            ...comment,
            user_id: users[Math.floor(Math.random() * users.length)].id,
            post_id: Math.ceil(Math.random() * numbPost),
        })
    }

    process.exit(0);
};

seedDb();