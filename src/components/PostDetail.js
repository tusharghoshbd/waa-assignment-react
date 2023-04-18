import { Link } from "react-router-dom";

const PostDetail = ({
    title,
    onSelectInputChange,
    updateButtonClicked,
    deleteButtonClicked,
}) => {
    return (
        <div className="content-detail">
            <div>MIU</div>
            <input
                type="text"
                label={"title"}
                name={"title"}
                onChange={onSelectInputChange}
                value={title}
            />
            <br />
            <br />
            <div>
                <input
                    type="button"
                    value="Update"
                    onClick={updateButtonClicked}
                />{" "}
                &nbsp;
                <input
                    type="button"
                    value="Delete"
                    onClick={deleteButtonClicked}
                />
            </div>
        </div>
    );
};

export default PostDetail;
