import React from 'react'
import Link from 'next/link'

const posts = [
  {
    title: "react 1",
    excerpt: "learn react sg sgf fgd hff gh fd hf hfghfdh fdh fdg hfh dfgh fdgh fgd hdhdf ghdfh dfh",
    slug: "reactdev1",
    img: "/image/example1.png",
    auther: "James Brook",
    date: "17 January 2019"
  },
  {
    title: "react 2",
    excerpt: "learn react fgdhesh sdgh dg hgfdj hd ncfhryhgcx sgh gh xhgfxh x hgxdhs hdfxthgxh ",
    slug: "reactdev2",
    img: "/image/example2.png",
    auther: "James Brook",
    date: "20 January 2019"
  }
]


const PostWidget = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8'>
      <p className='text-xl mb-8 font-semibold border-b pb-4'>Related posts</p>
      {posts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className='w-16 flex-none'>
            <img
              alt={post.title}
              height="60px"
              width="60px"
              className='align-middle rounded-full'
              src={post.img}
            />
          </div>
          <div className='flex-grow ml-4'>
            <p className='text-gray-500 text-xs'>
              {post.date}
            </p >
            <Link key={index} href={`/post/${post.slug}`}> 
            {post.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostWidget