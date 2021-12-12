// User model, post on blog model, comment for edit post
const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// A user can make many posts on the techblog
User.hasMany(Post, {
    foreignKey: 'user_id'
});

// A user can comment on a post
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

// Each post belongs to a user
Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

// Each post can contain multiple comments
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

// Each comment belongs to a user
Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

// Each comment is tied to a post
Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});

module.exports = {
    User,
    Post,
    Comment
};
