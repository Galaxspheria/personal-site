import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    // Group posts into years
    var years = {};
    for (let root of posts) {
      let post = root.node
      let date = post.frontmatter.date.split(',')
      let year = date[0]
      if (years[year]) {
        years[year].push(post)
      } else {
        years[year] = [post]
      }
    }
    // Sort each year chronologically
    for (let year of Object.keys(years)) {
      years[year] = years[year].sort((a, b) => a.frontmatter.date - b.frontmatter.date)
    }
    var keys = Object.keys(years).sort().reverse()

    return (
      <Layout>
        <section className="section">
          <div className="container">
              <div className="content">
                <h2 className="is-size-2 is-inline-block">Hi, I'm Hunter!</h2>
                <br/>
                <h5 className="is-size-5 is-inline-block has-text-weight-normal">I'm a Student, Developer, Designer, and Entrepreneur currently in my second year at Georgia Tech.</h5>
                <br/>
                <h5 className="is-size-5 is-inline-block has-text-weight-normal">You can email me <a>here</a> or find my resume <a>here</a>.</h5>
                <br/>
                <hr/>
                <br/>
                <h5 className="is-size-5 is-inline-block has-text-weight-normal">Here are some of the things I've made:</h5>
              </div>
          </div>
          {keys.map(year => (
            <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">{year}</h1>
            </div>
            <div className="product-grid">
            {years[year]
              .map(post => (
                <Link
                  className="product-parent"
                  key={post.id}
                  to={post.fields.slug}
                >
                  <p>
                    <div className="title is-5 has-text-white">
                      {post.frontmatter.title}
                    </div>
                    <div className="subtitle is-6 has-text-white">
                      {post.frontmatter.blurb}
                    </div>
                  </p>
                  <img class="product-preview" src={post.frontmatter.image} />
                  <div class="product-color" style={{backgroundColor: post.frontmatter.color}}> </div>
                </Link>
              ))}
              </div>
              <br/>
            </div>
          ))}
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "YYYY,MM,DD")
            image
            color
            blurb
          }
        }
      }
    }
  }
`
