"use client"
import { usePathname, useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  const pathname = usePathname();
  const movieId = pathname.split('/')[3];

  return (
   <div className='flex flex-col items-center justify-center h-[400px]'>
   <h2 className='text-3xl font-bold mb-2 text-red-500'>Not Found!!!</h2>
   <p>This movie with {movieId} id was not found!</p>
   <button  onClick={()=> router.back()} className='underline text-lg'>Go back</button>
 </div>
  )   
}

export default NotFound
