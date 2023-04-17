import { useState } from "react";
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import PostDetail from "../components/PostDetail";

const Dashboard = () => {
    const [postsState, setPostsState] = useState([
        {
            id: 0,
            title: "Title 1",
            author: "Author 1",
        },
        {
            id: 1,
            title: "Title 2",
            author: "Author 2",
        },
        {
            id: 2,
            title: "Title 3",
            author: "Author 3",
        },
    ]);

    const [postSelect, setPostSelect] = useState({});

    const onChange = (events) => {
        const copy = [...postsState];
        copy[0][events.target.name] = events.target.value;
        setPostsState(copy);
    };

    const onPostSelect = (id) => {
        setPostSelect({ ...postsState[id] });
    };
    return (
        <>
            <Posts posts={postsState} onPostSelect={onPostSelect} />
            <NewPost
                title={postsState[0].title}
                onChange={(event) => {
                    onChange(event);
                }}
            />

            <PostDetail title={postSelect.title} />
        </>
    );
};

export default Dashboard;
