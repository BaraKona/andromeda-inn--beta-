import React from 'react'
import Post from '../post/smallPost'
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { Navigation, Pagination, A11y, Autoplay } from 'swiper';

import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
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
                        <Swiper className="swiperClass"
                        modules={[Navigation, Pagination, A11y, Autoplay ]}
                        pagination={{ "dynamicBullets": true, clickable: true }}
                        spaceBetween={20}
                        slidesPerView={2.6}
                        autoplay={{ "delay": 10000, "disableOnInteraction": true}}
                        // onSlideChange={() => console.log('slide change')}
                        // onSwiper={(swiper) => console.log(swiper)}
                        breakpoints={{
                            0: {
                              width: 0,
                              slidesPerView: 1,
                            },
                            768: {
                              width: 768,
                              slidesPerView: 2,
                            },
                            1200: {
                              width: 1200,
                              slidesPerView: 2.6,
                            },
                          }}
                        > {posts.slice(0, 9).map((post) => (
                            <SwiperSlide key={post._id}>
                                <Post post={post}></Post>
                            </SwiperSlide>
                        ))}
                        </Swiper>
                    )}
                </div>
            </div>
        </div>

        </>
    )
}

export default Dashboard
