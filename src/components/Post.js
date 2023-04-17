const Post = ({ id, author, title, onPostSelect }) => {
    return (
        <div className="Content" onClick={(event) => onPostSelect(id)}>
            <h3>ID: {id}</h3>
            <p>Title: {title}</p>
            <div>Author: {author}</div>
        </div>
    );
};

export default Post;
