import React, { useContext } from 'react'
import Link from 'next/link'

const categories = [
  { name: "React", slug: "react" },
  { name: "Web development", slug: "web-dev" },
]

const Header = () => {
  return (
    <div className='container mx-auto px-10 mb-8 bg-gray-400'>
      <div className='border-b w-full inline-block border-white py-8'>
        <div className='md:float-left block'>
          <Link href="/">
            <span className='cursor-pointer font-bold text-4xl text-white'>
              New2morrow Blog
            </span>
          </Link>
          </div>
          <div className='hidden md:float-right md:contents'>
            {categories.map((data, index) => (
              <Link key={index} href={`/data/${data.slug}`}>
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                  {data.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    
  )
}

export default Header