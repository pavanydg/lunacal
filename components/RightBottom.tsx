"use client"
import { Plus_Jakarta_Sans } from 'next/font/google'
import React, { useState } from 'react'
import { CustImgComp } from './CustImgComp'

const jakarta = Plus_Jakarta_Sans({
  weight: ["800"],
  subsets: ["latin"],
})

export const RightBottom = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const [imgs, setImgs] = useState(["https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=1510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"])

  const handleLeft = () => {
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : 0
    )
  }

  const handleRight = () => {
    setCurrentIndex((prev) =>
      prev < imgs.length - 3 ? prev + 1 : imgs.length - 3
    )
  }

  const visibleImgs = imgs.slice(currentIndex, currentIndex + 3);

  const AddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImgs((prevImgs) => [...prevImgs, reader.result as string])
      };
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className='relative w-[720px] h-[316px] bg-[#363C43] shadow-top rounded-2xl'>
      <div className='absolute flex flex-col h-1/2 justify-between ml-3 mt-5'>
        <img src='/Vector.svg'></img>
        <img src='/menu.svg'></img>
      </div>
      <div className='relative flex justify-between ml-[51px]'>
        <div className='relative flex items-center h-[62px] bg-[#171717] rounded-[23px] mt-3 w-36 justify-center'>
          <div className='relative flex text-xl justify-around text-[#A3ADB2]' >
            <div>Gallery</div>
          </div>
        </div>
        <div className='flex items-center gap-5 mr-16'>
          <div className='relative h-11 w-32 rounded-[104px] mt-5 shadow-[-0.5px_-0.5px_6.9px_0px_rgba(255,255,255,0.25),9px_10px_7px_0px_rgba(0,0,0,0.4),inset_0px_0px_48px_0px_rgba(255,255,255,0.05),inset_0px_3px_3px_0px_rgba(255,255,255,0.15)] cursor-pointer'>
            <div className='absolute inset-0 bg-white opacity-[3%] rounded-[104px]'></div>
            <label htmlFor='fileInput' className={`${jakarta.className} relative text-xs text-white flex items-center justify-center h-full font-bold cursor-pointer`}>
              + ADD IMAGE
            </label>
            <input
              id='fileInput'
              type='file'
              accept='image/*'
              className='hidden'
              onChange={AddImage}
            />
          </div>
          <div className=' bg-gradient-to-br from-[#303439] to-[#161718] w-11 h-11 rounded-full flex justify-center shadow-[-5px_-3px_30px_-10px_rgba(150,190,231,1),4px_5px_30px_5px_rgba(16,18,19,1)] mt-5 cursor-pointer' onClick={handleLeft}>
            <img height="14px" width="14px" src='leftarrow.svg'></img>
          </div>
          <div className=' bg-gradient-to-br from-[#303439] to-[#161718] w-11 h-11 rounded-full flex justify-center shadow-[-5px_-3px_30px_-10px_rgba(150,190,231,1),4px_5px_30px_5px_rgba(16,18,19,1)] mt-5 cursor-pointer' onClick={handleRight}>
            <img height="14px" width="14px" src='rightarrow.svg'></img>
          </div>
        </div>
      </div>
      <div className='flex h-full justify-center pt-11'>
        <div className='flex justify-center text-xl text-[#969696] h-full'>
          <div className='w-[611px] relative overflow-x-hidden'>
            <div
              className={`flex gap-2 transition-transform duration-500 ease-in-out`}
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {imgs.map((img, index) => (
                <div key={index} className="flex-shrink-0 w-1/3">
                  <CustImgComp image={img} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
