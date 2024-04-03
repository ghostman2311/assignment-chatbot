import React from 'react'
import Image from 'next/image'
import avatarImage1 from '@/images/avatars/avatar-1.png'
import avatarImage2 from '@/images/avatars/avatar-2.png'
import avatarImage3 from '@/images/avatars/avatar-3.png'
import avatarImage4 from '@/images/avatars/avatar-4.png'
import avatarImage5 from '@/images/avatars/avatar-5.png'
import {
   ChevronUpIcon
  } from "@heroicons/react/24/outline";
  

export default function Card() {
    const cardsData = [
          {
            content:
              'Total View',
              number:"5101",
              icon: avatarImage1,
              percentage:"5.1%"
          },
          {
            content:
              'Total Profit',
              number:"45,2k",
              icon: avatarImage4,
              percentage:"20%"
            
          },
          {
            content:
              'Total Products',
              number:"2.450",
              icon: avatarImage5,
              percentage:"0.43%"
            
          },
          {
            content:
              'Total users',
              number:"3.456",
              icon: avatarImage3,
              percentage:"0.91%"
            
          },
     
      ]
  return (
    <ul className="mx-auto mt-1 grid max-w-2xl gap-6 sm:gap-8 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4">
          {cardsData.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul className="space-y-6 sm:space-y-8">
              
                  <li key={columnIndex}>
                    <figure className="relative rounded-sm bg-red-100 p-4 shadow-sm">
                  
                    <div className="h-10 w-10 overflow-hidden rounded-full bg-slate-50">
                          <Image src={column.icon} alt="" />
                    </div>
                      <figcaption className="relative mt-4 flex justify-between items-end pt-1">
                        <div>
                          <div className="font-display text-2xl font-extrabold text-slate-900">
                        {column.number}
                          </div>
                          <div className=" text-sm text-slate-400">
                          {column.content}
                          </div>
                        </div>
                        <div className='flex'>
                           <span className='text-sm text-green-600'> {column.percentage}</span> 
                           <ChevronUpIcon className="h-6 w-4 text-green-600 font-black" />
                        </div>
                      </figcaption>
                    </figure>
                  </li>
            
              </ul>
            </li>
          ))}
        </ul>
  )
}

