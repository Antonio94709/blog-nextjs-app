import React from 'react'

const CommentForm = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 '>
      <div className='text-xl mb-8 font-semibold border-b pb-4'>Comment Form</div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='comment' name='Comment' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          type="text"
          className='p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='Name'
        />
        <input
          type="email"
          className='p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='Email'
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
      <input type="checkbox" id='storeData' name='storeData' value="true" />
      <label className='ml-2 text-gray-500 cursor-pointer ' htmlFor='storeData'>Save my name and email for next time I comment</label>
      </div>
      
      <p className='text-xs text-red-500'>All fields required</p>
      <div className='mt-8'>
        <button type='button'
          className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-2'>
          Post Comment
        </button>
        <span className='text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>
      </div>
    </div>
  )
}

export default CommentForm