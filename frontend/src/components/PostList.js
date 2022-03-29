import Post from "./Post";
import {useEffect, useState} from "react";
import shortid from 'shortid';
import {useParams} from "react-router-dom";

export default function PostList() {
    const [postList, setPostList] = useState([]);
    const [isLoading, setLoading] = useState(true);
    let { postId } = useParams();

    console.log("postId", postId)
    console.log("postId", postId && Object.fromEntries(Object.entries(postList).filter(([k, v]) => k === postId)));

    useEffect(() => {
        console.log("First use effect");
        setLoading(true);
        const request = setTimeout(async () => {
            const response = await fetch('http://localhost:7779/posts', {method: 'GET'})
                .then(response => response.json());
            setPostList(response);
            setLoading(false);
        }, 0);
        return () => clearTimeout(request);
    }, [])

    // useEffect(async () => {
    //     console.log("Second use effect");
    //     const postItem = [Object.fromEntries(Object.entries(postList).filter(([k, v]) => k === postId))];
    //     await setPostList(postItem);
    //     console.log("item", Object.fromEntries(Object.entries(postList).filter(([k, v]) => k === postId)));
    //     console.log("item", postList);
    // }, [postId])

    const postClickHandle = (event) => {
        console.log("click", event.target.id);
        // setPostList([Object.fromEntries(Object.entries(postList).filter(([k, v]) => k === id))]);
    }

    return (
        <>
            {isLoading && <h3 className="w-50 m-4 g-4">Loading...</h3>}
            {/*{postId && <Post key={shortid.generate()} post={*/}
            {/*    Object.fromEntries(Object.entries(postList).filter(([k, v]) => k === postId))*/}
            {/*}/>}*/}
            {/*{!postId && postList.map(post => {return <Post key={shortid.generate()} post={post}/>})}*/}
            {postList.map(post => {return <Post key={shortid.generate()} post={post} onClick={postClickHandle}/>})}
        </>

    );
}