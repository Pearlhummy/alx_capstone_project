import Image from 'next/image';
import React, { useState } from 'react';
import netflixImg from '../../public/figla.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const Filgla = () => {
    const [ fullImeag , setFullImage ] =useState(false)

    const innerImg =()=>{
        setFullImage(!fullImeag)
        // console.log(fullImeag)    
    }
  return (
    <div className='w-full' >
      <div style={{overflow:'hidden'}} className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={netflixImg}
          alt='/'
        />
        
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Netflix App</h2>
          <h3>React JS / Tailwind / Firebase</h3>
        </div>
      </div>
      <br/>
        <br/>
        <div style={{textAlign:'center'}}>
            
            <div style={{width:'90%',height:'auto',margin:'auto'}}>
                <br/>
                {fullImeag?<Image alt='hi' loading="lazy" style={{color:"transparent"}}  src={netflixImg}  />:""}
                
            </div>
            <button onClick={innerImg}>{fullImeag?"close full scerin ":"view full scerin"}</button>
        </div>
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2><h1></h1>
          <p>
            I built this application in  JS and is hosted on netlify pages.
            <br/>
          </p>
          <a
            href='https://github.com/fireclint/netflix-react-tailwind'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://fireclint.github.io/netflix-react-tailwind/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> HTML
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> css
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default Filgla;
