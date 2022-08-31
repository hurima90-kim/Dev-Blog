import React, { FunctionComponent } from 'react'
import { graphql, Link } from 'gatsby'

type InfoPageProps = {
  data: {
    site: {
      siteMetadata: {
        title: string
        description: string
        author: string
        siteUrl: string
      }
    }
  }
}

const InfoPage: FunctionComponent<InfoPageProps> = function ({
  data: {
    site: {
      siteMetadata: { title, description, author, siteUrl },
    },
  },
}) {
  return (
    <div>
      {title} {description} {author} {siteUrl}
    </div>
  )
}

export default InfoPage

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`
