import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import get from 'lodash/get'
import StudentPostPreview from '../components/StudentPostPreview'
import Button from '../components/Button'
import { navigate } from 'gatsby'
import PropTypes from 'prop-types'
import { FaRegArrowAltCircleLeft } from 'react-icons/fa'

class StudentWallIndex extends React.Component {
  render() {
    function handleClick(event) {
      event.preventDefault()
      {
        navigate('/')
      }
    }

    const studentWallPosts = get(
      this,
      'props.data.allContentfulStudentWall.nodes'
    )

    return (
      <Layout location={this.props.location}>
        <StudentPostPreview studentWallPosts={studentWallPosts} />
        <Button
          className={
            'flex flex-col bg-red-600 hover:bg-red-400 rounded text-sm mt-5 mb-5 m-0 transition ease-out duration-500 hover:shadow-2xl md:text-lg pt-5 pb-4 p-20 items-center text-white uppercase'
          }
          onClick={handleClick}
          text="Back To Home"
          icon={<FaRegArrowAltCircleLeft />}
          type={'button'}
        />
      </Layout>
    )
  }
}

StudentWallIndex.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
}

export default StudentWallIndex

export const pageQuery = graphql`
  query StudentWallIndexQuery {
    allContentfulStudentWall(sort: { fields: updatedAt }) {
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
            width: 450
            height: 450
          )
        }
        childContentfulStudentWallTestimonialTextNode {
          childMarkdownRemark {
            excerpt
            html
          }
        }
      }
    }
  }
`