import React, { useState, useEffect, useRef } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import { GatsbyImage } from 'gatsby-plugin-image'
import Button from '../Button'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

let count = 0
let slideInterval

const Carousel = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const slideRef = useRef()

  const removeAnimation = () => {
    slideRef.current.classList.remove('fade-anim')
  }

  useEffect(() => {
    slideRef.current.addEventListener('animationEnd', removeAnimation)
    slideRef.current.addEventListener('mouseenter', pauseSlider)
    slideRef.current.addEventListener('mouseleave', startSlider)

    startSlider()

    return () => {
      pauseSlider()
    }
  }, [])

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick()
    }, 3000)
  }

  const pauseSlider = () => {
    clearInterval(slideInterval)
  }

  const allImages = data.allContentfulImages.nodes
  const handleOnNextClick = () => {
    count = (count + 1) % allImages.length
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }

  const handleOnPreviousClick = () => {
    const imagesLength = allImages.length
    count = (currentIndex + imagesLength - 1) % imagesLength
    setCurrentIndex(count)
    slideRef.current.classList.add('fade-anim')
  }

  return (
    <div ref={slideRef} className="m-2 select-none">
      <h2 className="text-center m-6 md:p-4">Our Highlights</h2>
      <div className="relative">
        <GatsbyImage
          image={allImages[currentIndex].image.gatsbyImageData}
          alt={allImages[currentIndex].alt}
        />
        <div className="absolute w-full top-1/2 transform -translate-y-1/2 px-3 flex justify-between items-center">
          <Button
            aria-label="Left Align"
            aria-hidden="true"
            onClick={handleOnPreviousClick}
            icon={<RiArrowLeftSLine size={80} color="white" />}
          />
          <Button
            aria-label="Right Align"
            aria-hidden="true"
            onClick={handleOnNextClick}
            icon={<RiArrowRightSLine size={80} color="white" />}
          />
        </div>
      </div>
    </div>
  )
}

export default function MyCarousel(props) {
  return (
    <StaticQuery
      query={graphql`
        query {
          allContentfulImages {
            nodes {
              id
              title
              slug
              alt
              image {
                gatsbyImageData(layout: FULL_WIDTH, width: 600, height: 250)
              }
            }
          }
        }
      `}
      render={(data) => <Carousel data={data} {...props} />}
    />
  )
}

Carousel.propTypes = {
  data: PropTypes.any.isRequired,
}
