import {useEffect} from "react";

export default function EditPost(url, id, setLoading) {
    useEffect(() => {
        setLoading(true);
        const request = setTimeout(async () => {
            const response = await fetch(`http://localhost:7779/posts/${id}`, {method: 'POST'})
                .then(response => response.json());
            setPostList(response);
            setLoading(false);
        }, 0);
        return () => clearTimeout(request);
    }, [])
}