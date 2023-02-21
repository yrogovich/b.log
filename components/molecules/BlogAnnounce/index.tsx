import PostType from 'interfaces/PostType'
import Link from 'next/link'
import {motion} from 'framer-motion'
import styles from './BlogAnnounce.module.scss'

const BlogAnnounce = ({post}) => {
  const {title, icon, slug, excerpt}: PostType = post

  const itemAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        staggerChildren: .2,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: .5,
        staggerChildren: .2,
      },
    },
  }

  const linkAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: .5,
        staggerChildren: .2,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: {
        duration: .5,
        staggerChildren: .2,
      },
    },
  }

  return (
    <motion.div
      className={styles.announce}
      variants={itemAnimation}
    >
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <motion.h2
          className={styles.title}
          variants={linkAnimation}
        >
          {icon} <a className={styles.link}>{title}</a>
        </motion.h2>
      </Link>

      <motion.p
        className={styles.text}
        variants={linkAnimation}
      >{excerpt}</motion.p>
    </motion.div>
  )
}

export default BlogAnnounce