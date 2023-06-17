import React from "react";
import PropTypes from "prop-types";

const propTypes = {};

const defaultProps = {};
type UserPostsProps = {
  userPost: Promise<Post[]>;
};

const UserPosts = async ({ userPost }: UserPostsProps) => {
  const posts = await userPost;
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

UserPosts.propTypes = propTypes;
UserPosts.defaultProps = defaultProps;
// #endregion

export default UserPosts;
