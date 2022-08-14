import Post from '../interfaces/post'
import {getAllPosts} from "./api/posts";

type Props = {
  allPosts: Post[]
}

export default function Index({ allPosts }: Props) {
  return (
   <div>
     <h1>Hello blog</h1>
     <p>This is a blog</p>
       {allPosts.map(post => (
         <div key={post.slug}>
              <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
         </div>
       ))}
   </div>
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
        props: { allPosts },
    }
}
