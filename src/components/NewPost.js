const NewPost = ({ title, onChange, btnChangeNameClicked }) => {
    return (
        <>
            <input
                type="text"
                label={"title"}
                name={"title"}
                onChange={onChange}
                value={title}
            />
            <button onClick={btnChangeNameClicked}>Change name</button>
        </>
    );
};

export default NewPost;
