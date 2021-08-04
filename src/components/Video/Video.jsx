import React from 'react'
import './Video.scss'

const Video = ({ videoId, url }) => {

  const playVideo = (id) => {
    let hasgId = `#${id}`
    if (document) {
      const video = document.querySelector(hasgId)
      video.play();
    }
  }

  const stopVideo = (id) => {
    let hasgId = `#${id}`
    if (document) {
      const video = document.querySelector(hasgId)
      video.pause();
    }
  }

  return (
    <video 
      id={videoId}
      className="Video"
      onMouseOver={() => playVideo(videoId)} 
      onMouseOut={() => stopVideo(videoId)}  
      loop muted
    >

      <source src={url} type="video/mp4" />

    </video> 
  )
}

export default Video
