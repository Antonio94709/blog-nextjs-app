import React, { useEffect, useRef, useState } from 'react'
import { SUBMIT_COMMENT } from '../graphgql'

const CommentForm = ({ slug }) => {
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
useEffect(() => {
 nameEl.current.value = window.localStorage.getItem('name')
 emailEl.current.value = window.localStorage.getItem('email')
}, [])


  const handleCommentSubmission = () => {
    setError(false)
    const { value: comment } = commentEl.current
    const { value: name } = nameEl.current
    const { value: email } = emailEl.current
    const { checked: storeData } = storeDataEl.current

    if (!comment || !name || !email) {
      setError(true)
      return
    }

    const CommentObj = {
      name, email, comment, slug
    }
    if (storeData) {
      window.localStorage.setItem('name', name)
      window.localStorage.setItem('eamil', email)
    } else {
      window.localStorage.removeItem('name', name)
      window.localStorage.removeItem('eamil', email)
    }

    SUBMIT_COMMENT(CommentObj)
      .then((res) => {
        setShowSuccessMessage(true);

        setTimeout(() => {
          setShowSuccessMessage(false)
        }, 3000);
      })
  }
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 '>
      <div className='text-xl mb-8 font-semibold border-b pb-4'>Comment your thoughts </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea ref={commentEl} className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700' placeholder='comment' name='Comment' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          type="text"
          className='p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='Name'
          ref={nameEl}
        />
        <input      
          type="email"
          className='p-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='Email'
          ref={emailEl}
        />
      </div>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <input ref={storeDataEl} type="checkbox" id='storeData' name='storeData' value="true" />
        <label className='ml-2 text-gray-500 cursor-pointer ' htmlFor='storeData'>Save my name and email for next time I comment</label>
      </div>

      {error && <p className='text-xs text-red-500'>All fields required</p>}
      <div className='mt-8'>
        <button type='button' onClick={handleCommentSubmission}
          className='transition duration-500 ease hover:bg-indigo-900 inline-block bg-pink-600 text-lg rounded-full text-white px-8 py-2'>
          Post Comment
        </button>
        {showSuccessMessage && <span className='text-sm sm:text-xl float-right font-semibold mt-3 text-green-500'>Comment submitted for review</span>}
      </div>
    </div>
  )
}

export default CommentForm