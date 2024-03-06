import React, { useEffect, useState } from 'react'
import './RowPost.css'
import axios from '../../axios'
import { API_KEY, IMAGE_URL } from '../../constants/constants'
import YouTube from 'react-youtube'
function RowPost(props) {
  const [movies, setMovies] = useState([])
  const [urlId, setUrlId] =useState('')
  useEffect(() => {
    axios.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results)
    }).catch(err=>{
      alert("Network Error")
    })
  }, [props.url])
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleMovieClick=(id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
      if(response.data.results.length!==0){
        setUrlId(response.data.results[0])
      }else{
        console.log("No Video Available/ Empty Array")
      }
      })
  }
  
  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj)=>
            <img  key={obj.id} onClick={()=> {handleMovieClick(obj.id)}} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${IMAGE_URL + obj.backdrop_path}`} />
          )
          }
        </div>
        { urlId && <YouTube opts={opts}  videoId={urlId.key} />}
    </div>
  )
}

export default RowPost