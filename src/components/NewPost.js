import { useRef } from "react";

const NewPost = ({ title, onChange, btnSaveClicked }) => {
    const myRef = useRef(null);

    const postSave = () => {
        // console.log(myRef.current?.value);
        onChange(myRef.current?.value);
        btnSaveClicked();
    };

    return (
        <>
            <input type="text" label={"title"} name={"title"} ref={myRef} />
            <button onClick={() => postSave()}>Save</button>
        </>
    );
};

export default NewPost;
