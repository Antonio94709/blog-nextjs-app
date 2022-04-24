import Link from 'next/link'
import React from 'react'
import { CalendarIcon } from "@heroicons/react/outline"


const PostCard = ({ post }) => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img
          src={post.img}
          alt={post.title}
          className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
      <h1 className="transition duration-700 text-center mb-8 cursor-pointer  hover:text-pink-600 text-3xl font-semibold">
        <Link href={`/post/${post.slug}`}>
          {post.title}
        </Link>
      </h1>
      <div className='block lg:flex flex-col text-center items-center justify-center mb-8 w-full'>
        <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto '>
          <img
            alt={post.img}
            height="30px"
            width="30px"
            className="align-middle rounded-full"
            src={post.img}
          />
          <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.auther}</p>
        </div>
        <div className='flex space-x-2 pt-2 font-medium text-gray-700'>
          <CalendarIcon className='w-5 h-5' />
          <p>{post.date}</p>
        </div>
      </div>
      <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
      <div className='text-center'>
      <Link href={`/post/${post.slug}`}>
          <span className='transition duration-500 tranform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
            Continue reading
          </span>
        </Link>
      </div>
      {/* {post.title}
        {post.excerpt} */}
    </div>
  )
}

export default PostCard