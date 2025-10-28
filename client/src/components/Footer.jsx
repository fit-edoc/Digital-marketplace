import React from 'react'

const Footer = () => {
  return (
    <div className='h-[50vh]  w-screen flex flex-col md:flex-row border-[1px] border-black'>

        <div className="h-[30%]  bg-white md:w-[30%] md:h-full flex items-center justify-center"><h1 className='font-hero  text-[50px] md:rotate-90'>Contact Us</h1></div>
         <div className="h-[70%]  bg-red-500 md:w-[70%] md:h-full"></div>
      
    </div>
  )
}

export default Footer
