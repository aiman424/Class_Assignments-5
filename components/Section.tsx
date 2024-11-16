import React from 'react'
import Image from 'next/image'

const Section = () => {
  return (
    <div className='h-screen'>
     <div className='flex h-[80%]'>
      <div className='w-1/2 flex flex-col justify-center items-start m-12'>
        <h1 className='text-[40px] font-bold w-[496px]'>IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>
        <p className='w-[390px] font-[Rye] h-[95px]'>An example of intricate workmanship and detail,
         elegant necklaces and long and short chains form a part of our desirable collection.</p>
         <button className='box-border w-[250px] h-[58px] p-[15px] gap-[20px] items-center bg-button'>Explore Now</button>
      </div>
      <div className='w-1/2 flex justify-center items-center'>
        <Image
        src={'/rs-group-wrap ⏵ rs-group (1).svg'}
        alt='jewellery'
        width={362}
        height={547}/>
      </div>
      </div>
     
    </div>
  )
}

export default Section
