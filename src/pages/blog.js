import React from 'react'
import Layout from '../components/Layout'
import styles from '../components/blog.module.css'

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>This is our blog</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
          officia minima neque dolorem magni ratione eveniet vel natus?
          Quibusdam, eius.
        </p>
      </div>
    </Layout>
  )
}

export default blog
