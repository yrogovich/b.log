import type PostType from 'interfaces/PostType'
import styles from './Article.module.scss'
import React from 'react'
import {motion} from 'framer-motion'

const Article: React.FC<PostType> = ({
  title,
  content,
}) => {
  const h1Animation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -100,
      opacity: 0,
    },
  }

  const articleAnimation = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
    exit: {
      y: -100,
      opacity: 0,
    },
  }

  return (
    <>
      <motion.h1
        variants={h1Animation}
        initial="hidden"
        animate="show"
        exit="exit"
        transition={{
          duration: .3,
        }}
        className={styles.articleTitle}
      >{title}</motion.h1>
      <motion.article
        variants={articleAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
        transition={{
          duration: .3,
        }}
        className={styles.article}
        dangerouslySetInnerHTML={{__html: content}}
      ></motion.article>
    </>
  )
}

export default Article