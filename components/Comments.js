import React from 'react'

const Comments = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Comments
      </h3>
      <div className='border-b border-gray-100 mb-4 pb-4'>
        <p className='mb-4'>
          <span className='font-semibold'>Jack </span> 
          on 17 March 2021
        </p>
        <p className='whitespace-pre-line text-gray-600 w-full'>I Like this blog</p>
      </div>

    </div>
  )
}

export default Comments