import React from 'react'
import Container from './Container'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-black px-6 pt-8 md:px-16 lg:px-36 w-full text-gray-300">
            <Container className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-10">
                <div className="md:max-w-96">
                    <Image src="/img/logo.svg" width={100} height={30} alt='Puredent'/>
                    <p className="mt-6 text-sm">
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">Social Media</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">TikTok</a></li>
                            <li><a href="#">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>+1-234-567-890</p>
                            <p>contact@example.com</p>
                        </div>
                    </div>
                </div>
            </Container>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © <a href="https://www.puredent.co/en-NG">Puredent</a>. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer
