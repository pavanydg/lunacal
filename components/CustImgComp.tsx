import React from 'react'

export const CustImgComp = ({image}: {
    image: string
}) => {
  return (
    <div className='gap-4'>
        <img  className='w-48 h-44 rounded-3xl cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 hover:-rotate-3 relative' src={`${image}`}></img>
    </div>
  )
}
