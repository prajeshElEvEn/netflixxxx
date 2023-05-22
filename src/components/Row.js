import axios from '../app/service/axios'
import React, { useEffect, useState } from 'react'

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
                        <img
                            className={`row-img ${isLargeRow && "row-img-large"}`}
                            key={movie.id}
                            src={
                                `${imageUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path
                                }`
                            }
                            alt={movie.name}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Row
