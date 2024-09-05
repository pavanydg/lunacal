"use client"
import { Poppins } from 'next/font/google'
import Image from 'next/image'
import React, { useState } from 'react'

const poppins = Poppins({
    weight: ['500'],
    subsets: ['latin']
})

export const RightTop = () => {
    const [about, setAbout] = useState(true);
    const [exp, setExp] = useState(false);
    const [recom, setRecom] = useState(false);
    return (
        <div className='relative w-[720px] h-[316px] bg-[#363C43] shadow-top rounded-2xl'>
            <div className='absolute flex flex-col h-1/2 justify-between ml-3 mt-5'>
                <img src='/Vector.svg'></img>
                <img src='/menu.svg'></img>
            </div>
            <div className='absolute flex justify-end items-center h-full w-full'>
                <div className=' bg-gradient-to-b from-[#888989] to-[#4A4E54] w-2 h-16 flex justify-end rounded-lg shadow-[0px_4px_10px_rgba(0,0,0,0.25)] mr-3'>
                </div>
            </div>
            <div className='relative flex justify-center'>
                <div className='relative flex items-center w-[614px] h-[62px] bg-[#171717] rounded-2xl mt-3 text-white overflow-hidden p-2'>
                    <div className={`${poppins.className} relative text-xl w-full h-full text-[#A3ADB2] flex items-center justify-around`}>
                        <div className="relative group h-full w-full flex items-center justify-center cursor-pointer"  onClick={() => {
                            setAbout(true)
                            setExp(false)
                            setRecom(false)
                        }}>
                            <div className="relative z-20">About Me</div>
                            <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#272728] before:to-[#96BEE7] before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:opacity-[.24] before:rounded-2xl"></div>
                            {about && <div className='absolute bg-[#28292F] w-full h-full rounded-2xl'>
                            </div>}
                        </div>
                        <div className="relative group h-full w-full flex items-center justify-center  cursor-pointer" onClick={() => {
                            setAbout(false)
                            setExp(true)
                            setRecom(false)
                        }}>
                            <div className="relative z-20">Experiences</div>
                            <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#272728] before:to-[#96BEE7] before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:opacity-[.24] before:rounded-2xl"></div>
                            {exp && <div className='absolute bg-[#28292F] w-full h-full rounded-2xl'>
                                </div>}
                        </div>
                        <div className="relative group h-full w-full flex items-center justify-center  cursor-pointer"  onClick={() => {
                            setAbout(false)
                            setExp(false)
                            setRecom(true)
                        }}>
                            <div className="relative z-20">Recommended</div>
                            <div className="absolute inset-0 z-0 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#272728] before:to-[#96BEE7] before:w-0 before:h-full before:opacity-0 before:transition-all before:duration-500 group-hover:before:w-full group-hover:before:opacity-[.24] before:rounded-2xl"></div>
                            {recom && <div className='absolute bg-[#28292F] w-full h-full rounded-2xl'>
                                </div>}
                        </div>
                    </div>
                </div>

            </div>
            <div className='flex justify-center text-xl mt-11 text-[#969696]'>
                {about && <div className='w-[611px] flex justify-center'>
                    About Me section:- <br></br>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school. This is a...
                </div>}
                {exp && <div className='w-[611px] flex justify-center'>
                    Experiences section:- <br></br>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school. This is a...
                </div>}
                {recom && <div className='w-[611px] flex justify-center'>
                    Recommended section:- <br></br>
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school. This is a...
                </div>}

            </div>

        </div>
    )
}
