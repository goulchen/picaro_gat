import { graphql, useStaticQuery } from "gatsby"

export default function useGetVideoQuery() {
  return useStaticQuery(graphql`
    query videos {
      allVideo {
        nodes {
          id
          name
          link
          description
          pictures {
            base_link
          }
        }
      }
      allFile(filter: { ext: { eq: ".jpg" } }) {
        nodes {
          id
          parent {
            id
          }
          childImageSharp {
            gatsbyImageData(width: 320)
          }
        }
      }
    }
  `)
}
