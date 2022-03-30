import Post from "./Post";
import shortid from 'shortid';
import GetPosts from "../services/GetPosts";
import {useEffect, useState} from "react";

export default function PostList(props) {
    const [postList, setPostList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [postView, setPostView] = useState(false);
    const [postDelete, setPostDelete] = useState(false);

    GetPosts('http://localhost:7779/posts', setPostList, setLoading);

    function PostClickEventHandle(post) {
        setPostView(true);
        setPostList([post.post]);
    }

    function PostDeleteEventHandle() {
        setPostDelete(true);
        window.location.reload();
    }

    useEffect(() => {
        console.log("PostView use effect: ", postView);
    }, [postView]);

    return (
        <>
            {isLoading && <h3 className="w-50 m-4 g-4">Loading...</h3>}
            {postList.map(post => {return <Post
                key={shortid.generate()}
                post={post}
                postClickFunc={PostClickEventHandle}
                postEditCallback={props.postEditCallback}
                postDeleteCallback={PostDeleteEventHandle}
            />})}
        </>

    );
}