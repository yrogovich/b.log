import type PostType from 'interfaces/PostType'
import styles from './Article.module.scss'
import React from 'react'

const Article: React.FC<PostType> = ({
  title,
  content,
}) => {
  return (
    <>
      <h1 className={styles.articleTitle}>{title}</h1>
      <article
        className={styles.article}
        dangerouslySetInnerHTML={{__html: content}}
      ></article>
    </>
  )
}

export default Article