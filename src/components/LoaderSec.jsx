"use strict"
import React, { useEffect, useState } from 'react'
import loaderimg from '../assets/images/loader.webp'

const LoaderSec = () => {
        const [isLoaded, setIsLoaded] = useState(false);

        useEffect(() => {
                const delay = setTimeout(() => {
                        setIsLoaded(true);
                        document.body.style.overflow = '';
                }, 4500);

                return () => clearTimeout(delay);
        }, []);
        useEffect(() => {
                document.body.style.overflow = 'hidden';
        }, []);
        return (
                <div>
                        <div className=" duration-300 min-vw-100 min-vh-100 bg-black position-fixed top-0 start-0" style={{ display: isLoaded ? 'none' : 'block', zIndex: 9999 }}>
                                <div className=' d-flex align-items-center justify-content-center vh-100'>
                                        <div className=' flex-column d-flex justify-content-center sm576:gap-[20px] align-items-center '>
                                                <span className=' d-flex  justify-content-center  align-items-center w-70'>
                                                        <img src={loaderimg} alt="" className='animation w-100 ' />
                                                </span>

                                        </div>
                                </div>
                        </div>
                </div>
        )
}


export default LoaderSec;
