const NewPost = ({ title, onChange, btnSaveClicked }) => {
    return (
        <>
            <input
                type="text"
                label={"title"}
                name={"title"}
                onChange={onChange}
                value={title}
            />
            <button onClick={btnSaveClicked}>Save</button>
        </>
    );
};

export default NewPost;
