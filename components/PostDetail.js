import React from 'react'
import { CalendarIcon } from "@heroicons/react/outline"

const PostDetail = () => {
    return (
        <div className='bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8'>
            <div className='relative overflow-hidden shadow-md mb-6'>
                <img
                    src='/image/example1.png'
                    alt='t'
                    className='object-top h-full w-full rounded-t-lg'
                />
            </div>
            <div className='px-4 lg:px-0'>
                <div className='flex items-center mb-8 w-full'>
                    <div className='flex items-center mb-4 lg:mb-0 w-full lg:w-auto '>
                        <img
                            alt="t"
                            height="30px"
                            width="30px"
                            className="align-middle rounded-full"
                            src="/image/Solar.jpg"
                        />
                        <p className='inline align-middle text-gray-700 ml-2 text-lg'>Long Breath</p>
                    </div>
                    <div className='flex space-x-2 pt-2 font-medium text-gray-700'>
                        <CalendarIcon className='w-5 h-5' />
                        <p>19 March 2090</p>
                    </div>
                </div>
                <h1 className='mb-8 text-3xl font-semibold'>
                    Post Tital
                </h1>
                <p>paragraph goes here</p>
            </div>
        </div>
    )
}

export default PostDetail