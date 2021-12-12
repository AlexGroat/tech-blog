// User model, post on blog model, comment for edit post
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// A user can make many posts on the techblog
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// Each post belongs to a user

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

