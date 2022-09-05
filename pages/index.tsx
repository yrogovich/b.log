import type PostType from '../interfaces/PostType'
import {getAllPosts} from './api/posts'
import Link from 'next/link'
import Layout from '../components/organisms/Layout'

// inspiration notion app

type Props = {
  allPosts: PostType[]
}

export default function Index({allPosts}: Props) {
  return (
    <Layout>
      <div className="container">
        <h1>Articles:</h1>
        {allPosts.map(post => (
          <>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              <h2>{post.title}</h2>
            </Link>

            <p>{post.excerpt}</p>
          </>
        ))}
      </div>
    </Layout>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
  ])

  return {
    props: {allPosts},
  }
}
