import React from 'react'
import BannerImage from '../assets/images/banner.jpg'

const Banner = () => {
    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
    }
    return (
        <div
            className="banner"
            style={{
                backgroundSize: "cover",
                backgroundImage: `url("${BannerImage}")`,
                backgroundPosition: "center center"
            }}
        >
            <div className="banner-items">
                <div className="banner-title">
                    Movie Title
                </div>
                <div className="banner-btns">
                    <button className="banner-btn">Play</button>
                    <button className="banner-btn">My List</button>
                </div>
                <div className="banner-desc">
                    {
                        truncate(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque unde voluptatem quae repellendus assumenda id aperiam facere repudiandae vero. Dolorum similique recusandae reprehenderit eaque eos eum laudantium saepe laboriosam eveniet? ", 200)
                    }
                </div>
            </div>
            <div className="banner-fade" />
        </div >
    )
}

export default Banner
