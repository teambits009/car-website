"use client";
import {useContext, useEffect, useState} from 'react';
import Image from 'next/image';
import{Link} from 'react-scroll'
import SearchMobile from './SearchMobile';
import {useMediaQuery} from 'react-responsive';

export default function Header() {
    // State variables
    const [header, setHeader] = useState(false);
    const [nav, setNav] = useState(false);
    
    // Media query hook for checking desktop mode
    const desktopMode = useMediaQuery({
        query: '(min-width: 1300px)',
    });

    // Effect hook for handling scroll events
    useEffect(()=> {
        const handleScroll = ()=> {
            // Update the header state based on the scroll position
            if (window.scrollY > 40) {
                setHeader(true)
            } else {
                setHeader(false);
            }
        };

        // Add scroll event listener when component mounts
        window.addEventListener('scroll', handleScroll); 
        
        // Remove scroll event listener when component unmounts
        return ()=> {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    console.log(header);

    return (
        <header
          className={`${
            header ? 'bg-white shadow-md py-2' : 'bg-transparent shadow-none py-4'
          } fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300`}
        >
          <div className="xl:container mx-auto flex-col xl:flex-row xl:items-center xl:justify-between">
            <div>
              {/* Your content here */}
              <Link to="yourTarget" smooth={true} duration={500}>
                <Image src="/icons/logo.svg" width={194} height={64} alt="" />
              </Link>
            </div>
          </div>
        </header>
      );
      