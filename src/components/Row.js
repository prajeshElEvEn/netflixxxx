import axios from '../app/service/axios'
import React, { useEffect, useState } from 'react'
import NoImage from '../assets/images/image-none.png'

const Row = ({
    title,
    fetchUrl,
    isLargeRow = false
}) => {
    const [movies, setMovies] = useState([])
    const imageUrl = 'https://image.tmdb.org/t/p/original/'

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    }, [fetchUrl])

    return (
        <div className="row">
            <div className="row-title">
                {title}
            </div>
            <div className="row-posters">
                {
                    movies.map((movie) => (
                        <div className='movie-card'>
                            <img
                                className={`row-img ${isLargeRow && "row-img-large"}`}
                                key={movie.id}
                                src={
                                    `${imageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                    }` || NoImage
                                }
                                alt={movie.name}
                            />
                            <div className="card-bottom">
                                <div className="movie-title">
                                    {movie.name || movie.title || movie.original_name}
                                </div>
                                <div className="movie-release">
                                    <svg width="18" height="18" fill="#333333" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.75 4a.75.75 0 0 0-1.5 0v1.816a3.375 3.375 0 0 0-2.872 2.899l-.087.653-.042.332a.493.493 0 0 0 .492.55H20.26a.493.493 0 0 0 .492-.55c-.013-.11-.027-.222-.042-.332l-.087-.653a3.375 3.375 0 0 0-2.872-2.899V4a.75.75 0 0 0-1.5 0v1.668a47.912 47.912 0 0 0-8.5 0V4Z"></path>
                                        <path d="M20.945 12.226a.494.494 0 0 0-.496-.476H3.551a.494.494 0 0 0-.496.476 28.92 28.92 0 0 0 .33 5.41 3.01 3.01 0 0 0 2.678 2.532l1.193.118c3.155.31 6.333.31 9.488 0l1.193-.118a3.01 3.01 0 0 0 2.678-2.532 28.92 28.92 0 0 0 .33-5.41Z"></path>
                                    </svg>
                                    <span>
                                        {movie.release_date || movie.first_air_date}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Row
