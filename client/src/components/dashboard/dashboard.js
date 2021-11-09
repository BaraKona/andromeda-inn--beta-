import React from 'react'
import DashboardFrame from './dashboardFrame'
import Post from '../post/smallPost'
import { useSelector } from 'react-redux';
import './css/dashboard.scss'

function Dashboard() {
    const posts = useSelector((state) => state.posts);

    return (
        <>
        <DashboardFrame/>
            <section className="mainDashboard Home">
                <div className="dashboardFlex">
                    <div className="dashboardWide">
                        <div className="dashboardBanner">
                            <h1> Explore the Hub and all it has to offer!</h1>
                            <button> Join Groups </button>
                        </div>
                        <div className="dashboardPosts">
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
                    <div className="dashboardNarrow">
                        <div className="dashboardChat">

                        </div>
                        <div className="topTags">

                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Dashboard
