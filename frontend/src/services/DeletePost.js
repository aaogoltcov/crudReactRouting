import {useEffect} from "react";

export default function DeletePost(url, id, setLoading, isDeleted, setDeleted, deleteSubmit, postDeleteCallback) {
    console.log(isDeleted);
    useEffect(() => {
        if (isDeleted) {
            console.log(url + id);
            setLoading(true);
            const request = setTimeout(async () => {
                await fetch(url + id, {method: 'DELETE'});
                setLoading(false);
                setDeleted(false);
                postDeleteCallback(true);
            }, 0);

            return () => {
                clearTimeout(request);

            };
        }
    }, [deleteSubmit])
}