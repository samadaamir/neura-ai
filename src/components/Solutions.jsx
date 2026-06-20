import React from 'react'

const Solutions = () => {
  return (
    <div className="w-full h-screen grid grid-cols-5 grid-rows-5 gap-x-4 gap-y-4 p-4 text-white bg-black">

      <div className="col-start-1 col-end-6 row-start-1 row-end-3 border-white border-2 p-3 rounded-3xl">
        <h1 className='text-4xl font-bold flex items-center'><i class="ri-error-warning-line text-7xl"></i>Most Resumes Never Reach Recruiters</h1>
        <h2 className='text-2xl font-bold px-3'>We help you change that.</h2>
        <p className='text-2xl px-3 '>Our AI resume analyzer identifies the gaps and gives you actionable insights to built an ATS friendly and interview winning resume.</p>
      </div>

      <div className="col-start-1 col-end-3 row-start-3 row-end-4 border-white border-2 rounded-3xl px-3 py-1">
        <h1 className='text-3xl font-bold '><i class="ri-close-line text-3xl bg-red-500 rounded-[50%]"></i>The Problem</h1>
        <p className='text-xl font-bold '>Why Most Resume Never Reach Recruiter.</p>
      </div>

      <div className="col-start-1 col-end-3 row-start-4 row-end-6 border-white border-2 rounded-3xl p-3 ">

        <h1 className='text-3xl gap-5 flex items-center'><i class="ri-file-search-line text-4xl"></i>Missing Keywords</h1>
        <h1 className='text-3xl gap-5 flex items-center'><i class="ri-file-close-line text-4xl"></i>Not ATS Friendly</h1>
        <h1 className='text-3xl gap-5 flex items-center'><i class="ri-arrow-right-down-long-line text-4xl"></i>Low Impact Content</h1>
        <h1 className='text-3xl gap-5 flex items-center'><i class="ri-slideshow-3-line text-4xl"></i>Poor Formatting</h1>
      </div>

      <div className="col-start-4 col-end-6 row-start-3 row-end-5 border-white border-2 rounded-3xl p-3 ">


        <h1 className='text-3xl gap-5 flex items-center'><i class="ri-file-search-line text-4xl"></i>Smart Keyword Match</h1>
        <h1 className='text-3xl gap-5 flex items-center'><i class="ri-file-check-line text-4xl"></i>ATS optimized</h1>
        <h1 className='text-3xl gap-5 flex items-center'><i class="ri-arrow-right-up-long-fill text-4xl"></i>Stronger Impact</h1>
        <h1 className='text-3xl gap-5 flex items-center'><i class="ri-slideshow-3-line text-4xl"></i>Better Formatting</h1>

      </div>

      <div className="col-start-4 col-end-6 row-start-5 row-end-6 border-white border-2 rounded-3xl">
        <h1 className='text-xl font-bold p-4'>Build an ATS Friendly, Interview Winning Resume </h1>
      </div>

      <div className="col-start-3 col-end-4 row-start-3 row-end-6 border-white border-2 rounded-3xl flex flex-col ">
        <h1 className='text-3xl font-bold p-2'><i class="ri-check-line text-3xl bg-green-500 rounded-[50%]"></i>The Solution</h1>
        <p className='font-bold text-3xl p-2'><span className='text-green-500'>96%</span> Accuracy</p>
        <p className='text-xl p-2'>Our AI scans, analyzes and optimizes your resume to help you pass ATS checks and get more interviews. </p>
      </div>

    </div>
  )
}

export default Solutions