import React, { useState } from 'react'

const Backtop = () => {
        const [isVisible, setIsVisible] = useState(false);

        const scrollToTop = () => {
                window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                });
        };

        window.addEventListener('scroll', () => {
                if (window.scrollY > 300) {
                        setIsVisible(true);
                } else {
                        setIsVisible(false);
                }
        });
        return (
                <div>
                        <button className={`back-to-top ${isVisible ? 'visible' : ''} position-fixed border-0 backtopbtn bg-transparent  z-3 `}
                                onClick={scrollToTop}
                                style={{ display: isVisible ? 'block' : 'none', }} >
                                <div className=' backtotop d-flex  align-items-center  justify-content-center p-2 p-sm-0 animation'>
                                        <svg
                                                className="flex justify-center items-center"
                                                width="20"
                                                height="20"
                                                fill="white"
                                                viewBox="0 0 16 16"
                                        >
                                                <path
                                                        fillRule="evenodd"
                                                        d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708l6-6z"
                                                ></path>
                                                <path
                                                        fillRule="evenodd"
                                                        d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                                                ></path>
                                        </svg>
                                </div>
                        </button>
                </div>
        )
}

export default Backtop
