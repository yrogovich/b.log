import PostType from 'interfaces/PostType'
import Link from 'next/link'
import styles from './BlogAnnounce.module.scss'

const BlogAnnounce = ({post}) => {
  const {title, icon, slug, excerpt}: PostType = post

  return (
    <div
      className={styles.announce}
    >
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <h2
          className={styles.title}
        >
          {icon} <span className={styles.link}>{title}</span>
        </h2>
      </Link>

      <p className={styles.text}>{excerpt}</p>
    </div>
  )
}

export default BlogAnnounce