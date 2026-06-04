import Image from 'next/image'
import React from 'react'
import Container from '../global/Container'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section id="#home" className='bg-linear-to-b from-[#D9D9FF] to-[#78a1e2] shadow-lg flex flex-col items-center justify-center'>
    <Container className="flex flex-col max-md:gap-20 md:flex-row items-center justify-between">
        <div className="flex flex-col items-center md:items-start">
            <h1 className="text-center md:text-left text-4xl leading-10 md:leading-16 md:text-7xl md:leading-20 font-bold max-w-xl text-slate-900">
                12-Hours Fresh
                <br/>
                <span className='text-blue-500'>Confidence</span> Challenge.
            </h1>
            <p className="text-center md:text-left text-sm text-slate-700 max-w-lg mt-2">
                Unlock smarter workflows with AI tools designed to boost productivity, simplify tasks and help you do more with less effort.
            </p>
            <div className="flex items-center gap-4 mt-8 text-sm">
                <a href="/#get-started">
                    <button className="bg-indigo-600 hover:bg-indigo-700 text-white active:scale-95 transition rounded-md px-7 h-11 cursor-pointer">
                        Get started
                    </button>
                </a>
                <button className="flex items-center gap-2 border border-slate-600 active:scale-95 hover:bg-white/10 transition text-slate-600 rounded-md px-6 h-11">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-video-icon lucide-video"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"/><rect x="2" y="6" width="14" height="12" rx="2"/></svg>
                    <span>Watch video</span>
                </button>
            </div>
        </div>
        <img src="/img/hero-img.png" alt="hero" width={2000} height={2000} className="max-w-sm sm:max-w-md lg:max-w-lg 2xl:max-w-xl transition-all duration-300"/>
    </Container>
</section>

  )
}

export default HeroSection
