import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import {GET_CATEGORIES} from '../graphgql'


// const categories = [
//   { name: "React", slug: "react" },
//   { name: "Web development", slug: "web-dev" },
// ]

const Header = () => {

 
  const [categories, setCategories] = useState([])
   useEffect(() => {
   GET_CATEGORIES()
   .then((newCategories) => setCategories(newCategories))
 
   }, [])
  

  return (
    <div className='container mx-auto px-10 mb-8 '>
      <div className='border-b w-full inline-block border-gray-500 py-8'>
        <div className='md:float-left block'>
          <Link href="/">
            <span className='cursor-pointer font-bold text-4xl text-gray-500'>
              New2morrow Blog
            </span>
          </Link>
          </div>
          <div className='hidden md:float-right md:contents'>
            {categories.map((category, index) => (
              <Link key={index} href={`/category/${category.slug}`}>
                <span className='md:float-right mt-2 align-middle text-gray-500 ml-4 font-semibold cursor-pointer'>
                  {category.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    
  )
}

export default Header