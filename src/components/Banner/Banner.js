import React,{useEffect, useState} from 'react'
import './Banner.css'
import axios from '../../axios'
import { API_KEY, IMAGE_URL } from '../../constants/constants'

function Banner() {
    const [movie, setMovie] = useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            // const randomIndex = Math.floor(Math.random() * response.data.results.length);
            const randomIndex = Math.floor(Math.random() * 20)+1;
            const randomMovie = response.data.results[randomIndex];
            console.log(response.data.results)
            setMovie(randomMovie);
        })
    },[])
  return (
    <div
    style={{backgroundImage: `url(${movie ? IMAGE_URL+movie.backdrop_path : ""})`}} 
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner_ buttons'>
                <button  className="button">Play</button>
                <button  className="button">My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ""}</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
  }

export default Banner