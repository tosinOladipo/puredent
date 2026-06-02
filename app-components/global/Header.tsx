import React from 'react'
import Container from './Container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const Header = () => {
  return (
     <header className="w-full py-4">
        <Container className="flex justify-between">
          <Image src="/img/logo.svg" width={200} height={50} alt='Puredent'/>
          <nav></nav>
          <Button>Get Started</Button>
        </Container>
      </header>
  )
}

export default Header
