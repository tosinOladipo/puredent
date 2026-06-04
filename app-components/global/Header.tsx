import Container from './Container'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Nav from './Nav'
import Link from "next/link";


const Header = () => {
  return (
     <header className="w-full py-4">
        <Container className="flex justify-between items-center">
          <Link href="/"><Image src="/img/logo.svg" width={200} height={50} alt='Puredent'/></Link>
          <nav className='hidden md:flex'>
            <Nav/>
          </nav>
          <a href="/#get-started"><Button>Get Started</Button></a>
        </Container>
      </header>
  )
}
export default Header
