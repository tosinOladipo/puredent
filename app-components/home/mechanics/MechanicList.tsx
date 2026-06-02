import { Button } from '@/components/ui/button'
import React from 'react'


type MechanicType = {
  icon: React.ReactNode;
  headline: string;
  desc: string
};

const MechanicList = ({icon, headline, desc} : MechanicType) => {
  return (
    <div className='flex gap-2 items-center'>
        <Button size="icon" className='bg-white rounded-full w-10 h-10 text-blue-500'>{icon} </Button>
        <div className='flex flex-col'>
            <h3 className='text-md font-semibold'>{headline}</h3>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default MechanicList
