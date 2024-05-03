import React from 'react'
import { Arrowellp5 } from './Icon'
import whoimg from '../assets/images/who-img.webp'
import Commonbtn from './Commonbtn'

const Whoaresection = () => {
  return (
    <div className=' s7-padding position-relative z-1 ' id="faq">
                <span className=' position-absolute  z-0  arrowellipse5'><Arrowellp5/></span>
                <div className=' container  mb-sm-4 position-relative z-1'>
                    <h2 className=' fs-3lg lh-72 fw-medium color-offwhite-e4 mb-sm-5 mb-3 text-center ' data-aos="zoom-in">Who Are <span className=' font-gradient'>We </span>?</h2>
                    <div className=' d-flex pt-md-4 mt-1 align-items-center justify-content-between flex-column  flex-lg-row '>
                        <div className=' s7-img mx-sm-3 '>
                            <img src={whoimg} alt="s7img" className=' w-100 h-100' data-aos="zoom-in" />
                        </div>
                        <div className=' max-w-494 mt-4  mt-lg-0 '>
                            <p className=' fs-1sm lh-22 color-offwhite-e4 fw-normal text-center mb-1  text-lg-start ' data-aos="zoom-in">MEET YOUR INSTRUCTORS</p>
                            <p className=' fw-medium  fs-2lg lh-41 color-offwhite-e4 text-center  text-lg-start mb-sm-3 mb-2 ' data-aos="zoom-in">Hi, We’re Kody Doherty <span className=' d-block '>and Kolton Starr 👋</span></p>
                            <p className=' fw-normal  fs-2sm lh-25 color-offwhite3 mb-sm-3 mb-2 text-center  text-lg-start ' data-aos="zoom-in"> <span className=' d-block '>And we know firsthand that building a career as a software engineer without a computer science degree is possible.</span>
                                <span className=' d-block '> We started where you are *right now*—without engineering degrees, a professional portfolio, or years of experience.</span>
                                <span className=' d-block '>  Then we climbed the ranks to hold senior positions at tech titans like Amazon, Apple, and the US government.</span>
                                <span className=' d-block '>   Throughout our careers, we’ve managed entire teams of engineers, directed $30 million program budgets, and built 2 successful tech startups (one that we sold).</span>
                                <span className=' d-block '>   Learning to code did more than add a few impressive lines to our resumes. It literally changed our lives…</span>
                            </p>
                            <p className=' fw-semibold  fs-2sm lh-23 font-gradient mb-5 text-center  text-lg-start  ' data-aos="zoom-in">I want to become a software engineer in 6 months!</p>
                            <div className=' mt-1 d-flex  justify-content-center  justify-content-lg-start  ' data-aos="zoom-in">
                                <Commonbtn/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  )
}

export default Whoaresection
