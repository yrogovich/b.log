import type PostType from 'interfaces/PostType'
import {getAllPosts} from 'pages/api/posts'
import Layout from 'components/organisms/Layout'
import BlogAnnounce from 'components/molecules/BlogAnnounce'
import {motion} from 'framer-motion'

type Props = {
  allPosts: PostType[]
}

export default function Index({allPosts}: Props) {
  const h1Animation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    exit: {
      y: -100,
      opacity: 0,
    },
  }

  const containerAnimation = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
    exit: {},
  }

  return (
    <Layout>
      <div className="container">
        <motion.h1
          className="h1"
          variants={h1Animation}
          initial="hidden"
          animate="show"
          exit="exit"
        >Articles:
        </motion.h1>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate="show"
          exit="exit"
          transition={{}}
        >
          {allPosts?.map(post => (
            <BlogAnnounce key={post.slug} post={post}/>
          ))}
        </motion.div>
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'icon',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {allPosts},
  }
}
