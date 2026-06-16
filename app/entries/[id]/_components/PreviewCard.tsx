import React from 'react'
import { UploadType } from "@/utils/types"


const PreviewCard = ({ entry }: { entry: UploadType }) => {


  return (
    <div key={entry.id} className='cursor-pointer relative hover:-translate-y-1 transition duration-300 rounded-lg overflow-hidden'>
            {/* <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 size-11.5 rounded-full bg-white/40 flex items-center justify-center cursor-pointer'><svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.25 13.193A1.5 1.5 0 0 1 0 11.894V1.502a1.5 1.5 0 0 1 2.25-1.3l9 5.197c1 .577 1 2.02 0 2.598z" fill="#fff"/></svg></div> */}
            <img src={entry.imageUrl} alt={entry.username} className="w-full max-w-40 md:max-w-50 h-50 object-cover" />
        </div>
  )
}

export default PreviewCard
