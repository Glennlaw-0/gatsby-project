import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../components/products.module.css'
import Image from 'gatsby-image'
import { Link } from 'gatsby'

const ComponentName = ({ data }) => {
  const {
    allContentfulProduct: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.pages}>
        {products.map(product => {
          return (
            <article key={product.id}>
              <Image fluid={product.image.fluid} alt={product.title}></Image>
              <h3>{product.title}</h3>
              <div className={styles.price}>&#36;{product.price}</div>
              <Link to={`/products/${product.slug}`}>More Details</Link>
            </article>
          )
        })}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProduct {
      nodes {
        id
        title
        slug
        price
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`

export default ComponentName
