import Link from 'next/link'
import React from 'react'



const Categories = ({ posts }) => {
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {posts.map((widget, index) => (
        <Link key={index} href={`/widget/${widget.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {widget.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories