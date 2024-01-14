"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import navLogoImg from '../public/nova-speaker-logo.svg'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

  const [open, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
      <div className='w-full pt-4 bg-transparent grid grid-cols-3 gap-4 items-center justify-between relative z-50'>

        <div onClick={toggleMenu} className='relative z-10 gap-2 w-12 h-12 text-white p-2 rounded-full flex flex-col justify-center items-center border border-white hover:border-none group ease-in-out duration-300 cursor-pointer'>
          {open ? <AiOutlineClose size={20} style={{color: 'white'}} className='hover:cursor-pointer' /> :
            <div className='w-full h-full contents'>
              <div className='w-[.5rem] h-[.5rem] bg-[var(--light-white)] opacity-0 rounded-full group-hover:opacity-100 ease-in-out duration-200 group-hover:w-full group-hover:h-full z-10 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2'></div>
              <div className='w-full h-[1.5px] bg-white group-hover:bg-black rounded-md z-20'></div>
              <div className='w-full h-[1.5px] bg-white group-hover:bg-black rounded-md z-20'></div>
            </div>
          }
        </div>

        <Link href='/' className='w-full flex justify-center items-center'>
          <Image
            src={navLogoImg}
            width={100}
            height={100}
            alt='logo'
            className='cursor-pointer'
            style={{objectFit: 'cover'}}
            priority
          />
        </Link>

        <div className="w-full flex justify-end items-center">
          <button className='leading-none px-5  pt-4 pb-3 border w-fit text-xs text-white rounded-md ease-in duration-300 hover:text-[var(--black)] hover:bg-[var(--light-white)]'>Reserve now</button>
        </div>

        {/* Menu */}
        <div className={ open ? 'absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black/90 text-center ease-in duration-300' : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'}>
          <ul>
            <li onClick={toggleMenu} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
              <Link href='/'>Accueil</Link>
            </li>
            <li onClick={toggleMenu} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
              <Link href='/histoire'>Notre histoire</Link>
            </li>
            <li onClick={toggleMenu} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
              <Link href='/produits'>Nos produits</Link>
            </li>
            <li onClick={toggleMenu} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
              <Link href='/blog'>Blog</Link>
            </li>
            <li onClick={toggleMenu} className='p-4 text-4xl text-white hover:text-[var(--red)]'>
              <Link href='/contact'>Contact</Link>
            </li>
          </ul>
        </div>

      </div>

  )
}

export default Navbar
