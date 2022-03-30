import Post from "./Post";
import shortid from 'shortid';
import GetPosts from "../services/GetPosts";
import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

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

    function PostDeleteEventHandle(value) {
        console.log("postDelete", value, postDelete);
        setPostDelete(true);
        console.log("postDelete", value, postDelete);
    }

    useEffect(() => {
        console.log("Post list use effect: ", postView, postDelete);
    }, [postView]);

    useEffect(() => {
        console.log("PostDelete use effect: ", postView, postDelete);
    }, [postDelete]);

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
            <Outlet element={postList}/>
        </>

    );
}