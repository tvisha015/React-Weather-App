import React, { type PropsWithChildren } from 'react'
import Header from '../components/header.tsx'

const layout = ({children}: PropsWithChildren) => {
    
  return (
    <div className='bg-gradient-to-br from-background to-muted'>
        <Header/>
        <main className='main-h-screen container mx-auto px-4 py-8'>
            {children}
        </main>
        <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
            <div className='container mx-auto px-4 text-center text-gray-400'>
              © {new Date().getFullYear()} Klimate — Made with ☀️ & ❤️
            </div>
        </footer>
    </div>
  )
}

export default layout