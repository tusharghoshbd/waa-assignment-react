import { Link } from "react-router-dom";

const PostDetail = ({ title }) => {
    return (
        <div className="content-detail">
            <div>MIU</div>
            <div className="min-height ">{title}</div>
            <div>
                <Link to="/edit">edit</Link> &nbsp;
                <Link to="/delete">delete</Link>
            </div>
        </div>
    );
};

export default PostDetail;
