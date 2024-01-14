import React from 'react'
import Image from 'next/image'
import heroImg from '../public/hero-img.webp'

const Hero = () => {
  return (
    <section className='min-h-screen pt-40 w-full flex flex-col justify-center items-center text-white'>
      <div className='w-full'>
        <div className='max-w-[48rem] flex items-start gap-6 flex-col relative z-10'>
          <h1 className='lg:text-7xl md:text-6xl sm:text-5xl text-3xl font-medium'>Experience immersive sound at your home.</h1>
          <div className="w-full flex justify-start items-center">
            <button className='px-5 pt-4 pb-3 border w-fit text-xs rounded-md ease-in duration-300 text-[var(--black)] bg-[var(--light-white)]'>Reserve now</button>
          </div>
        </div>
      </div>

      <div className='w-full z-10'>
        <span className='text-[345px] font-medium -tracking-widest leading-none'>N</span>
        <span className='text-[345px] font-medium -tracking-widest leading-none'>O</span>
        <span className='text-[345px] font-medium -tracking-widest leading-none'>V</span>
        <span className='text-[345px] font-medium -tracking-widest leading-none'>A</span>
      </div>

      <div className='z-0 px-8 flex justify-end items-end w-full h-full absolute top-auto bottom-0 left-0 right-24'>
        <Image
          src={heroImg}
          width={100}
          height={100}
          alt='logo'
          className='absolute max-w-[50rem] w-full h-full'
          style={{objectFit: 'fill'}}
          priority
        />
      </div>

    </section>
  )
}

export default Hero
