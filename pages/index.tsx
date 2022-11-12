import type PostType from '../interfaces/PostType'
import {getAllPosts} from './api/posts'
import Layout from '@/components/organisms/Layout/Layout'
import BlogAnnounce from '@/components/molecules/BlogAnnounce/BlogAnnounce'

type Props = {
  allPosts: PostType[]
}

export default function Index({allPosts}: Props) {
  return (
    <Layout>
      <div className="container">
        <h1 className="h1">Articles:</h1>

        {allPosts.map(post => (
          <BlogAnnounce key={post.slug} post={post}/>
        ))}
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
