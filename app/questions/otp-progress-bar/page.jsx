'use client'
import { useEffect, useState } from 'react';

export default function Page() {

  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let timer;
    if (progress > 0) {
      timer = setInterval(() => {
        setProgress(progress - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [progress])

  return (
    <main className="flex min-h-screen flex-col items-center p-12 space-y-5">
      <div className="">
        <p className='text-3xl font-semibold'>How to create a timer with progress bar?</p>
      </div>

      <div className='container'>
        <div className="progress__bar__container bg-gray-100 shadow-md rounded-md text-gray-400 p-6 space-y-3">
          <p className='text-sm font-semibold '>{progress} Seconds</p>
          <div className="bar__track border border-green-500 rounded-md shadow-md w-80 h-5">
            <div className="progress__bar bg-blue-500 rounded-md h-full" style={{ width: `${100-progress}%` }}></div>
          </div>
        </div>
      </div>
    </main>
  )
}


