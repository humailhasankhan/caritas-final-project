import React from 'react'
import statsImage from '../assets/Stats.png'

const Statistics = () => {
  return (
    <div className="flex m-2">
      <div className="flex-1 max-w-4xl m-auto">
        <h2 className="text-center text-xl mt-6 p-4 w-full md:text-4xl">
          2019-20 Academic year
        </h2>
        <div className="aspect-w-16 aspect-h-8">
          <img
            className="m-auto p-4"
            src={statsImage}
            alt="Statistics for student results year 2019 to 2020"
          />
        </div>
      </div>
    </div>
  )
}

export default Statistics
