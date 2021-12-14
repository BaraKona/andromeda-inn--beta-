import React from 'react'
import Post from '../post/smallPost'
import { useSelector } from 'react-redux';
import './css/dashboard.scss'

function Dashboard() {
    const posts = useSelector((state) => state.posts);

    return (
        <>
        <div className="dashboardWide">
            <div className="dashboardChat">
                <h2> This page is being worked on </h2>
            </div>
            <div className="dashboardPosts">
            <h2> Recent Posts</h2>
            <div className ="recentPosts">
                    {!posts.length ? <div> Loading... </div> : (
                        <div className="smallPostMap"> {posts.slice(0, 3).map((post) => (
                            <div className = "smallPostItem" key={post._id}>
                                <Post post={post}></Post>
                            </div>
                        ))}
                        </div>
                    )}
                </div>
            </div>
        </div>

        </>
    )
}

export default Dashboard
