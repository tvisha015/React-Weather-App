import { type PropsWithChildren } from 'react'
import Header from '../components/header.tsx'
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6"; // For modern icons

const layout = ({children}: PropsWithChildren) => {
    
  return (
    // <div className='bg-gradient-to-br from-background to-muted'>
    //     <Header/>
    //     <main className='main-h-screen container mx-auto px-4 py-8'>
    //         {children}
    //     </main>
    //     <footer className="border-t backdrop-blur py-12 supports-[backdrop-filter]:bg-background/60">
    //         <div className='container mx-auto px-4 text-center text-gray-400'>
    //           © {new Date().getFullYear()} Klimate — Made with ☀️ & ❤️
    //         </div>
    //         <div>
    //           Btw it's me, Tvisha 
    //           Follow me on linkedIn, X
    //         </div>
    //     </footer>
    // </div>
    
    <div className='bg-gradient-to-br from-background to-muted min-h-screen flex flex-col'>
  <Header />

  {/* Main Content */}
  <main className='flex-grow container mx-auto px-4 py-12'>
    {children}
  </main>

  {/* Footer */}
  <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-8">
  <div className="container mx-auto px-4 text-center space-y-4">

    <p className="text-muted-foreground text-sm">
      © {new Date().getFullYear()} <span className="font-semibold">Klimate</span> — Made with ☀️ & ❤️
    </p>

    <p className="text-muted-foreground text-sm">
      Btw it’s me, <span className="font-semibold text-primary">Tvisha Sharma</span> 🌱
    </p>

    <div className="flex justify-center items-center gap-6 text-2xl text-muted-foreground">
      {/* LinkedIn */}
      <a 
        href="https://www.linkedin.com/in/tvisha-sharma-74a551283/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-neutral-500 transition-colors"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={20}/>
      </a>

      {/* X (Twitter) */}
      <a 
        href="https://x.com/tvishasharma_" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-neutral-500 transition-colors"
        aria-label="X (Twitter)"
      >
        <FaXTwitter size={20}/>
      </a>

      {/* GitHub */}
      <a 
        href="https://github.com/tvisha015" 
        target="_blank" 
        rel="noopener noreferrer"
        className="hover:text-neutral-500 transition-colors"
        aria-label="GitHub"
      >
        <FaGithub size={20}/>
      </a>
    </div>

  </div>
</footer>
</div>

  )
}

export default layout