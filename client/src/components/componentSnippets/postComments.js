import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './css/comment.scss'
import dayjs from 'dayjs'


function PostComments({post}) {
    const users = useSelector((state) => state.users);
    var relativeTime = require('dayjs/plugin/relativeTime')
    dayjs.extend(relativeTime)

    function findUser (commenter) {
        const username = users.find((user) => user.userID === commenter)
        return (username.userName)
    }

    if (post?.postComments?.length > 0) {
        return (
            <div className="parentComments">
                {post.postComments.slice(0).reverse().map((comments, index) => (
                    <div className="parentComment" key={index}>
                        <p className ="commentComment"><span className="textEffect">{findUser(comments.commenter)}</span>: {comments.comment}</p>
                        <p className = "commentDate">{dayjs(comments.commentTime).fromNow()}</p>
                    </div>

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
