import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import ExitModal from '../ExitModal/exitModal'

const CaseStudyPreview = ({ caseStudies }) => {
  if (!caseStudies) return null
  if (!Array.isArray(caseStudies)) return null
  return (
    <div className="p-2 m-2">
      <h1 className="text-center text-2xl pt-5 p-10 md:text-4xl">
        Our Case Studies
      </h1>
      <div>
        <ExitModal />
      </div>
      <ul className="grid grid-cols-1 p-2 sm:grid-cols-2 p-4 gap-4 md:grid-cols-3 gap-8 bg-gray-200 rounded">
        {caseStudies.map((caseStudy) => {
          return (
            <li className="flex bg-white rounded" key={caseStudy.id}>
              <Link
                className="flex flex-col hover:text-OnHoverColor transition ease-out duration-500 hover:shadow-2xl"
                to={`/caseStudies/${caseStudy.slug}`}
              >
                <GatsbyImage
                  className="rounded-t"
                  alt={caseStudy.alt}
                  image={caseStudy.image.gatsbyImageData}
                />

                <h2 className="flex-1 text-center text-base mt-5 m-5">
                  {caseStudy.title}
                </h2>
                <h4 className="text-center p-5 font-bold">{caseStudy.name}</h4>
                <div className="grow p-5 m-5 border border-gray-400 rounded">
                  <p>
                    {
                      caseStudy.childContentfulCaseStudiesStoryTextNode
                        .childMarkdownRemark.excerpt
                    }
                  </p>
                  <span className="mt-2">Read More</span>
                </div>
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
