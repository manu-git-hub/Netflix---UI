import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, IMAGE_URL } from '../../constants/constants'
function RowPost() {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`discover/tv?api_key=${API_KEY}&with_networks=213`).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  }, [])
  
  return (
    <div className='row'>
        <h2>Netflix Orginals</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img className='poster' alt='poster' src={`${IMAGE_URL + obj.backdrop_path}`} />
          )
          }
        </div>
    </div>
  )
}

export default RowPost