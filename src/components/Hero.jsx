import React from 'react'
import { logo } from '../assets';


const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
        <nav className='flex justify-between items-center w-full mb-12 pt-4'>
            <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>
            <button 
            type='button'
            onClick={() => window.open(`https://github.com/Siddhartha097`)}
            className='black_btn'
            >
                Github
            </button>
        </nav>
        <h1 className='head_text'>
          Summerize Articles with <br className='max-md:hidden'/> 
          <span className='orange_gradient'>OpenAI GPT-4</span>
        </h1>
        <h2 className='desc font-inter'>
          Simplify your reading with Sumz, and open-source article summerizer that transforms your lengthy articles into clear and concise summaries.
        </h2>
    </header>
  )
}

export default Hero