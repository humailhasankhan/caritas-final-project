import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const CaseStudyPreview = ({ caseStudies }) => {
  if (!caseStudies) return null
  if (!Array.isArray(caseStudies)) return null
  return (
    <div className="bg-gray-200 p-2 m-2">
      <h1 className="text-center text-2xl pt-5 p-10 md:text-4xl ">
        Our Case Studies
      </h1>
      <ul className="grid grid-cols-1 p-2 sm:grid-cols-2 p-2 gap-4 md:grid-cols-3 gap-8 bg-gray-200">
        {caseStudies.map((caseStudy) => {
          return (
            <li className="flex bg-white" key={caseStudy.id}>
              <Link
                className="flex flex-col hover:opacity-70 transition ease-out duration-500 hover:shadow-2xl"
                to={`/caseStudies/${caseStudy.slug}`}
              >
                <GatsbyImage alt="" image={caseStudy.image.gatsbyImageData} />
                <h2 className="flex-1 text-center mt-5 m-5">
                  {caseStudy.title}
                </h2>
                <h4 className="text-center p-5 font-bold">{caseStudy.name}</h4>

                <p className="grow text-justify p-5 m-5 border border-black">
                  {
                    caseStudy.childContentfulCaseStudiesStoryTextNode
                      .childMarkdownRemark.excerpt
                  }
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

CaseStudyPreview.propTypes = {
  caseStudies: PropTypes.any.isRequired,
}

export default CaseStudyPreview
