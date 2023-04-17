import Post from "./Post";

const Posts = ({ posts, onPostSelect }) => {
    const postList = posts.map(({ id, title, author }) => {
        return (
            <Post
                id={id}
                title={title}
                author={author}
                key={id}
                onPostSelect={onPostSelect}
            />
        );
    });
    return postList;
};

export default Posts;
