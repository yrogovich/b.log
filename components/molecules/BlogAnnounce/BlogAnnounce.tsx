import PostType from 'interfaces/PostType'
import Link from 'next/link'
import styles from './BlogAnnounce.module.scss'

const BlogAnnounce = ({post}) => {
  const {title, icon, slug, excerpt}: PostType = post

  return (
    <div key={slug} className={styles.announce}>
      <Link as={`/posts/${slug}`} href="/posts/[slug]">
        <h2 className={styles.title}>
          {icon} <a className={styles.link}>{title}</a>
        </h2>

      </Link>

      <p className={styles.text}>{excerpt}</p>
    </div>
  )
}

export default BlogAnnounce