import {useEffect} from "react";

export default function SendNewPost(
    url,
    isPostSent,
    setLoading,
    postTitle,
    postText,
    setIsPostSent,
    setTitlePost,
    setPostText,
    setIsRedirect,
    buttonSubmit,
    id=0,
) {
    useEffect(() => {
        if (!isPostSent) {
            setLoading(true);
            const request = setTimeout(async () => {
                await fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json;charset=utf-8'
                    },
                    body: JSON.stringify({
                        id: id,
                        content: {
                            title: postTitle,
                            text: postText,
                        },

                    }),
                });
                setIsPostSent(true);
                setLoading(false);
                setTitlePost(String());
                setPostText(String());
                setIsRedirect(true);
            }, 0);
            return () => clearTimeout(request);
        }
    }, [buttonSubmit])
}