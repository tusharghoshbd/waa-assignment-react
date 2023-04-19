import { useEffect, useState } from "react";
import axios from "axios";

import apiConfig from "./../configs/api";

import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import PostDetail from "../components/PostDetail";

import { SelectedPostContext } from "./../context/SelectedPostContext";

const Dashboard = () => {
    const [postsState, setPostsState] = useState([]);
    const [reloadPostData, setReloadPostData] = useState(false);

    const [postState, setPostState] = useState({
        title: "",
    });
    const [postSelect, setPostSelect] = useState({ id: 0, title: "" });

    useEffect(() => {
        fetchData();

        return () => {};
    }, [reloadPostData]);

    const fetchData = () => {
        axios
            .get(apiConfig.baseUrl + "post")
            .then((response) => {
                const result = response.data.posts;
                result.length = 5;
                setPostsState(result);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };

    const onInputChange = (title) => {
        const copy = { ...postState };
        copy["title"] = title;
        setPostState(copy);
    };

    const btnSaveClicked = () => {
        savePostData();
    };

    const savePostData = () => {
        const data = {
            title: postState.title,
        };

        axios
            .post(apiConfig.baseUrl + "posts", data)
            .then((data) => {
                console.log("Success", data);
                setReloadPostData(!reloadPostData);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    const onPostSelect = (id) => {
        const post = postsState.find((x) => x.id === id);
        setPostSelect((prevState) => ({ ...prevState, ...post }));
    };

    const deleteButtonClicked = () => {
        axios
            .delete(apiConfig.baseUrl + "post/" + postsState.id)
            .then((response) => {
                console.log("Success");
                setReloadPostData(!reloadPostData);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const updateButtonClicked = () => {
        const data = {
            ...postsState,
        };
        axios
            .put(apiConfig.baseUrl + "post/", data)
            .then((response) => {
                console.log("Success");
                setReloadPostData(!reloadPostData);
                setPostSelect({});
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const onSelectInputChange = (events) => {
        const copy = { ...postSelect };
        copy[events.target.name] = events.target.value;
        setPostSelect(copy);
    };

    return (
        <>
            <Posts posts={postsState} onPostSelect={onPostSelect} />
            <NewPost
                title={postState.title}
                onChange={(event) => {
                    onInputChange(event);
                }}
                btnSaveClicked={btnSaveClicked}
            />
            <SelectedPostContext.Provider value={postSelect}>
                {postSelect.title !== "" ? (
                    <PostDetail
                        onSelectInputChange={(event) => {
                            onSelectInputChange(event);
                        }}
                        updateButtonClicked={updateButtonClicked}
                        deleteButtonClicked={deleteButtonClicked}
                    />
                ) : null}
            </SelectedPostContext.Provider>
            <br />
            <br />
        </>
    );
};

export default Dashboard;
