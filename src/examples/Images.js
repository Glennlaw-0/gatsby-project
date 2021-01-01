import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import img from '../images/image-1.jpg'
import Image from 'gatsby-image'
import styles from '../components/image.module.css'

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "image-2.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "image-3.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)

  return (
    <section className={styles.images}>
      <article className={styles.singleImage}>
        <h3>Basic Image</h3>
        <img src={img} width="100%" alt="" />
      </article>
      <article className={styles.singleImage}>
        <h3>fixed Image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} />
      </article>
      <article className={styles.singleImage}>
        <h3>fluid Image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
