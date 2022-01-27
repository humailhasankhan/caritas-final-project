import React from 'react'

const VideoSection = () => {
  return (
    <div className="flex m-2">
      <div className="flex-1 max-w-4xl m-auto">
        <h2 className="text-center text-xl mt-6 p-4 w-full md:text-4xl">
          See Our Work in Action
        </h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            className="m-auto p-4"
            src="https://www.youtube.com/embed/-YoFF3f1uJg"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default VideoSection
