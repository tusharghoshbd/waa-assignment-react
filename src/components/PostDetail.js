import { useContext } from "react";
import { SelectedPostContext } from "../context/SelectedPostContext";

const PostDetail = ({
    onSelectInputChange,
    updateButtonClicked,
    deleteButtonClicked,
}) => {
    const postContext = useContext(SelectedPostContext);
    return (
        <div className="content-detail">
            <div>MIU</div>
            <input
                type="text"
                label={"title"}
                name={"title"}
                onChange={onSelectInputChange}
                value={postContext.title}
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
