import React from "react";
import { useSelector } from "react-redux";

function About() {

    const blur_background = useSelector(state => state.background_blur.value)

  return (
    <div className="mb-16 max-w-5xl mx-auto w-full">
      <h1 className="text-3xl main-font-900 main-text-color border-t-2 border-l-2 border-dashed border-green-200 p-1 pl-5 pt-5 w-full md:w-56"><span className='text-green-200'>A</span>bout <span className='text-green-200'>M</span>e</h1>
      
      <div className="flex flex-col items-center xl:place-items-end xl:items-start xl:grid gap-5 xl:grid-cols-3 mt-14">
        <p className=' text-justify col-span-2 mb-8 main-font-400 text-gray-500 text-lg px-2'>
          Hello! My name is Brittany and I enjoy creating things that live on
          the internet. My interest in web development started back in 2012 when
          I decided to try editing custom Tumblr themes — turns out hacking
          together a custom reblog button taught me a lot about HTML & CSS!
         <br /> <br /> Fast-forward to today, and I've had the privilege of working at an
          advertising agency, a start-up, a huge corporation, and a student-led
          design studio. My main focus these days is building accessible,
          inclusive products and digital experiences at Upstatement for a
          variety of clients.
        </p> 
        <div className={`w-64 border-dashed border-2 border-transparent duration-500 rounded-md ${!blur_background && 'hover:border-green-200'}`}>
        <img className={`w-64 rounded-md transform duration-500 ${!blur_background && 'hover:translate-x-4 hover:translate-y-4'} `} src="../images/profile1.png" alt="profile image" />
        </div>
      </div>
     <div className='flex justify-end'>
     <h1 className="text-3xl text-right main-font-900 text-transparent border-b-2 border-r-2 border-dashed border-green-200 p-1 px-5 pb-5 w-full md:w-56 select-none cursor-default">About Me</h1>
     </div>
    </div>
  );
}

export default About;
