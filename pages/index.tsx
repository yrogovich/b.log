import type PostType from '../interfaces/PostType'
import {getAllPosts} from "./api/posts";
import Link from "next/link";

type Props = {
  allPosts: PostType[]
}

export default function Index({ allPosts }: Props) {
  return (
   <div>
     <h1>Hello blog</h1>
     <p>This is a blog</p>
       {allPosts.map(post => (
           <>
               <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
                   <h2>{post.title}</h2>
               </Link>

               <p>{post.excerpt}</p>
           </>
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
