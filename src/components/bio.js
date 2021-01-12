/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Typist from "react-typist"
// import "./cursor.scss"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/./profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          description {
            line1
            line2
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  const { author, social, description } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author.name}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        <Typist>
          Hi there! I'm <strong>{author.name}</strong> - {author.summary}
          </ Typist>
        <p></p>
        <p>{description.line1}</p>
        <p>{description.line2}</p>
        {` `}
        Connect with me on {` `}
        <a href={`https://www.linkedin.com/in/${social.linkedin}`}>
           LinkedIn
        </a>
        !
      </p>
    </div>
  )
}

export default Bio
