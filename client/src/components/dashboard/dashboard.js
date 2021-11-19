import React from 'react'
import Navbar from '../layout/newNavbar'
import Post from '../post/smallPost'
import { useSelector } from 'react-redux';
import './css/dashboard.scss'

function Dashboard() {
    const posts = useSelector((state) => state.posts);

    return (
        <>
    <section className="mainDashboard Home">
        <Navbar/>
            <div className="dashboardFlex">
                <div className="dashboardNarrow">
                    <div className="dashboardFriends">
                    </div>
                    <div className="dashboardUsers">
                    </div>
                </div>
                <div className="dashboardWide">
                    <div className="dashboardChat">

                    </div>
                    <div className="dashboardPosts">
                    <h2> Recent Posts</h2>
                    <div className ="recentPosts">
                            {!posts.length ? <div> Loading... </div> : (
                                <div className="postMap"> {posts.slice(0, 3).map((post) => (
                                    <div className = "postItem" key={post._id}>
                                        <Post post={post}></Post>
                                    </div>
                                ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </section>
    </>
    )
}

export default Dashboard
