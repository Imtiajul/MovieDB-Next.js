"use client"

import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  return (
    <div className='flex flex-col justify-center items-center h-96'>
      <h1 className="text-2xl font-bold mb-2">
      Sorry Page not found!!!
      </h1>
      <button onClick={()=>router.back()}  className='underline text-lg'>Go back</button>
    </div>
  )
}

export default NotFoundPage
