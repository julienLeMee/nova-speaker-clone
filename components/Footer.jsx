import React from 'react'
import Link from 'next/link'
import { FaFacebookF } from 'react-icons/fa'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'
import { SlSocialInstagram } from 'react-icons/sl'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className='pt-10 bg-[#f3b45a]/20'>
      <div className='flex max-w-[80%] mx-auto items-start justify-evenly my-4 sm:w-[80%] border-b py-10'>
        <Link href='/' className='mr-4'>
          <Image src='/assets/logo.jpg' width={100} height={100} alt='logo' className='cursor-pointer bg-white px-3 py-2 w-full rounded-full hover:scale-105 duration-300 h-full' style={{objectFit: 'cover'}} priority />
        </Link>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex flex-col">
            <p className='py-4 tracking-wider text-sm'>Liens rapides</p>
            <div className="flex flex-col">
              <Link href="/">
                <p className='text-gray-500 mb-2 mr-4 cursor-pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>Accueil</p>
              </Link>
              <Link href='/histoire' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>Notre histoire</p>
              </Link>
              <Link href='/produits' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>Nos produits</p>
              </Link>
              <Link href='/blog' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>Blog</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className='py-4 tracking-wider text-sm'>Productions</p>
            <div className=" flex-col">
              <Link href="/produits">
                <p className='text-gray-500 mb-2 mr-4 cursor-pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>Oeufs</p>
              </Link>
              <Link href='/produits' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>Bovins</p>
              </Link>
              <Link href='/produits' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>Volailles</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className='py-4 tracking-wider text-sm'>Contact</p>
            <div className=" flex-col">
              <Link href="tel:">
                <p className='text-gray-500 mb-2 mr-4 cursor-pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>Téléphone</p>
              </Link>
              <Link href='mailto:' target='_blank'>
                <p className='text-gray-500 mb-2 cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300 text-xs'>Email</p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <p className='py-4 tracking-wider text-sm'>Social</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="tel:">
                <BsFillTelephoneFill className='mr-4 cursor-pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
              <Link href='mailto:' target='_blank'>
                <AiOutlineMail className='cursor-pointer mr-4 -pointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
              <Link href='https://instagram.com' target='_blank'>
                <SlSocialInstagram className='cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
              <Link href='https://fr-fr.facebook.com/' target='_blank'>
                <FaFacebookF className='cursor-pointer mr-4 ointer hover:scale-105 hover:text-[var(--red)] ease-in duration-300' />
              </Link>
            </div>
          </div>
        </div>
      </div>
        <p className='text-sm text-center text-gray-500 pb-20 p-8'>2024 | © Nova Speaker Clone</p>
    </div>
  )
}

export default Footer
