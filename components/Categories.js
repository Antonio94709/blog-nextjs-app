import Link from 'next/link'
import React, {useState , useEffect} from 'react'
import {GET_CATEGORIES} from '../graphgql'


const Categories = ({ posts }) => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
  GET_CATEGORIES()
  .then((newCategories) => setCategories(newCategories))

  }, [])
 
  
  return (
    <div className='bg-white shadow-lg rounded-lg p-8 mb-8 pb-12'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>
        Categories
      </h3>
      {categories.map((widget) => (
        <Link key={widget.slug} href={`/widget/${widget.slug}`}>
          <span className='cursor-pointer block pb-3 mb-3'>
            {widget.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default Categories