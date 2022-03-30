import {useEffect} from "react";

export default function GetPosts(url, setPostList, setLoading) {
    useEffect(() => {
        setLoading(true);
        const request = setTimeout(async () => {
            const response = await fetch('http://localhost:7779/posts', {method: 'GET'})
                .then(response => response.json());
            setPostList(response);
            setLoading(false);
        }, 0);
        return () => clearTimeout(request);
    }, [])
}