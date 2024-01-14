import Image from 'next/image'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-12 bg-[#71818e]">
      <div className='w-full relative'>
        <Navbar />
        <Hero />
      </div>
      <Footer />



    </main>
  )
}
