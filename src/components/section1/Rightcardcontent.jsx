import React from 'react'

const Rightcardcontent = (props) => {
  return (
    <div className='absolute top-0 left-0  h-full w-full p-5 flex flex-col justify-between'>


    <h1 className='bg-white w-9 h-9 rounded-full flex justify-center items-center font-bold '>{props.id+1}</h1>

    <div>

      <p className='w-[90%]  text-white mb-8'>{props.intro}</p>

      <div className='flex justify-between'>
        <button className='bg-blue-800 px-7 py-2 rounded-full cursor-pointer  text-white'>{props.tag}</button>
        <button className='bg-blue-800 px-3 py-2 rounded-full  text-white cursor-pointer'><i class="ri-arrow-right-line"></i></button>
      </div>
      
    </div>

  </div>
  )
}

export default Rightcardcontent;