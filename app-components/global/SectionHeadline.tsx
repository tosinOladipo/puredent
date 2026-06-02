
import React from 'react'

const SectionHeadline = ({topic, title, desc}: {topic: string, title:string, desc:string}) => {
  return (
    <section className='flex flex-col gap-3'>
        <span className='test-sm font-bold'>{topic}</span>
        <h2 className='text-3xl md:text-5xl font-bold'>{title}</h2>
        <p className='text-lg text-slate-500 w-full md:w-[60%]'>{desc}</p>
    </section>
  )
}

export default SectionHeadline
