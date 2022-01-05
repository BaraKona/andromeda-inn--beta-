import React from 'react'

function PostComments({post}) {
    if (post?.postComments?.length > 0) {
        return (
            <div>
                {post.postComments.map((comments) => (
                    <p>{comments.comment}</p>
                ))}
            </div>
        )
    }
    return (
        <div>
            <p> There doesn't seem to be any messages here. Lucky you! Be the first ^^ </p>
        </div>
    )
}

export default PostComments
