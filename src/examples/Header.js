import React from 'react'
// import { useStaticQuery, graphql } from 'gatsby'

// const getData = graphql`
//   {
//     site {
//       siteMetadata {
//         person {
//           age
//           name
//         }
//         author
//         data
//         description
//         title
//       }
//     }
//   }
// `

const Header = () => {
  // const data = useStaticQuery(getData)
  return (
    <div>
      <h1>This is our Header</h1>
    </div>
  )
}

export default Header
