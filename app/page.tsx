import React from 'react'
import Image from 'next/image';
import Header from '../components/Header';
import Section from '../components/Section';

const Home = () => {
  return (
    <div className='h-screen'>
      <Header/>
      <Section/>
      <div className='flex justify-center'>
        <blockquote><h1 className='w-[811px] h-[94px] font-[Rye] text-[70px] text-heading2 flex justify-center items-center'>Shop By Categories</h1></blockquote>
      </div>
      <div className='flex justify-center items-center w-[1280px] h-[70px]'>
        <ul className='flex gap-[40px] text-select'>
          <li className='font-[Libre Bodoni] font-bold text-[30px]'>Earrings</li>
          <li className='font-[Libre Bodoni] font-bold text-[30px]'>Necklace</li>
          <li className='font-[Libre Bodoni] font-bold text-[30px]'>Bracelet</li>
          <li className='font-[Libre Bodoni] font-bold text-[30px]'>Rings</li>
        </ul>
      </div>
         
      <div className='flex gap-1'>
        <Image
        src={'/Group 14230.svg'}
        alt='earring'
        width={493}
        height={300}/>

        <Image
        src={'/Component 1.svg'}
        alt='earring'
        width={433}
        height={480}/>
      </div>
    </div>
  )
}

export default Home
