import React from 'react'
import Navbar from '../components/layout/navbar'
import ExplorePosts from '../components/explore/explorePosts'
import ExplorePeople from '../components/explore/explorePeople'

function ExplorePage() {
    return (
        <div className = "explore">
            <Navbar/>
            <ExplorePosts />
        </div>
    )
}

export default ExplorePage
