import Container from '@/app-components/global/Container'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 gap-4 py-8">
        <Image src="/img/face/face-1.png" alt="sample" width={500} height={500} className='col-span-1 w-full h-auto rounded-lg'/>
        <div className="col-span-1 flex flex-col gap-6">
            <h1 className="text-3xl font-bold">Welcome to the Smile Revolution!</h1>
            <p className="text-gray-500 p-6 shadow-lg rounded-4xl">Join us in spreading smiles and confidence with Puredent. Share your moments, connect with others, and be part of a movement that celebrates the power of a smile.</p>
            <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold">Get Started</button>
        </div>
    </Container>
  )
}

export default page
