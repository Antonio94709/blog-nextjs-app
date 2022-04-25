import Image from 'next/image'
import React from 'react'


const Author = ({ }) => {
  return (
    <div className='text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20'>
      <div className='absolute left-0 right-2 -top-14'>


        <Image
        unoptimized
          src='/image/Solar.jpg'
          alt='t'
          height="100px"
          width="100px"
          className='align-middle rounded-full'

        />

      </div>
      <h3 className='text-white my-4 text-xl font-bold'>Morgen freeman</h3>
      <p className='text-white text-lg'>Author bio</p>
    </div>
  )
}

export default Author