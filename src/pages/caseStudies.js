import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import get from 'lodash/get'
import CaseStudyPreview from '../components/CaseStudyPreview'
import Button from '../components/Button'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'

class CaseStudyIndex extends React.Component {
  render() {
    function handleClick(event) {
      event.preventDefault()
      {
        navigate('/')
      }
    }

    const caseStudies = get(this, 'props.data.allContentfulCaseStudies.nodes')

    return (
      <Layout location={this.props.location}>
        <CaseStudyPreview caseStudies={caseStudies.reverse()} />
        <Button
          className={
            'flex flex-row-reverse self-center bg-red-600 rounded text-sm mt-5 mb-5 m-3 transition ease-out duration-500 hover:shadow-2xl md:text-lg pt-5 pb-4 p-20 items-center text-white hover:bg-transparent hover:text-red-600 hover:font-bold border-4 border-transparent hover:border-red-600 uppercase'
          }
          onClick={handleClick}
          text="Back To Home"
          icon={<FaRegArrowAltCircleLeft size={30} className="mr-5"/>}
          type={'button'}
        />
      </Layout>
    )
  }
}

CaseStudyIndex.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default CaseStudyIndex

export const pageQuery = graphql`
  query CaseStudyIndexQuery {
    allContentfulCaseStudies(sort: { fields: updatedAt }) {
      nodes {
        id
        title
        slug
        name
        alt
        image {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        story {
          internal {
            content
          }
        }
        childContentfulCaseStudiesStoryTextNode {
          childMarkdownRemark {
            excerpt
          }
        }
      }
    }
  }
`
