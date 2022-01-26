import React from 'react'

const VideoSection = () => {
  return (
    <div>
      <h2 className="text-center text-4xl mt-6 p-4 w-full">
        See Our Work in Action
      </h2>
      <iframe
        className="m-auto p-4"
        width="640"
        height="360"
        src="https://www.youtube.com/embed/-YoFF3f1uJg"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default VideoSection
