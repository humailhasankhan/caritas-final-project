/* eslint-disable */
const path = require('path')

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for case studies
  const singleCaseStudy = path.resolve('./src/templates/singleCaseStudy.js')

  const result = await graphql(
    `
      {
        allContentfulCaseStudies {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful posts`,
      result.errors
    )
    return
  }

  const caseStudies = result.data.allContentfulCaseStudies.nodes

  // Create case study pages
  // But only if there's at least one case study found in Contentful
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (caseStudies.length > 0) {
    caseStudies.forEach((caseStudy, index) => {
      const previousCaseStudySlug =
        index === 0 ? null : caseStudies[index - 1].slug
      const nextCaseStudySlug =
        index === caseStudies.length - 1 ? null : caseStudies[index + 1].slug

      createPage({
        path: `/caseStudies/${caseStudy.slug}/`,
        component: singleCaseStudy,
        context: {
          slug: caseStudy.slug,
          previousCaseStudySlug,
          nextCaseStudySlug,
        },
      })
    })
  }

  // Define a template for wall posts
  const singleWallPost = path.resolve(
    './src/components/StudentWallPost/studentWallPost.js'
  )

  const resultStudentWall = await graphql(
    `
      {
        allContentfulStudentWall {
          nodes {
            title
            slug
          }
        }
      }
    `
  )

  if (resultStudentWall.errors) {
    reporter.panicOnBuild(
      `There was an error loading your Contentful wall posts`,
      resultStudentWall.errors
    )
    return
  }

  const studentWallPosts = resultStudentWall.data.allContentfulStudentWall.nodes

  // Create student wall page
  // But only if there's at least one post found in Contentful

  if (studentWallPosts.length > 0) {
    studentWallPosts.forEach((wallPost) => {
      createPage({
        path: `/studentWall/${wallPost.slug}/`,
        component: singleWallPost,
        context: {
          slug: wallPost.slug,
        },
      })
    })
  }
}
