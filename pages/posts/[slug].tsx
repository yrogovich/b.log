import {useRouter} from 'next/router'
import {getAllPosts, getPostBySlug} from 'pages/api/posts'
import markdownToHtml from 'pages/api/markdownToHtml'
import type PostType from 'interfaces/PostType'
import ErrorPage from 'next/error'
import Layout from '@/components/organisms/Layout/Layout'
import Button from '@/components/atoms/Button'
import Article from '@/components/molecules/Article'

type Props = {
  post: PostType,
  // morePosts: PostType[]
  // preview?: boolean
}

type Params = {
  params: {
    slug: string
  }
}

export default function Post({post}: Props) {
  console.log(post)
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404}/>
  }

  return (
    <Layout>
      <div className="container">
        <Article {...post} />
        <Button href="/" variant="primary">Go back</Button>
      </div>
    </Layout>
  )
}

export async function getStaticProps({params}: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'coverImage',
    'excerpt',
    'content',
  ])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
