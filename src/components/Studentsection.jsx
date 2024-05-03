import { Swiper, SwiperSlide } from 'swiper/react';
import sliderimg1 from "../assets/images/slid1.webp";
import sliderimg2 from "../assets/images/slid2.webp";
import sliderimg3 from "../assets/images/slid3.webp";
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Pagination } from 'swiper/modules';
import { Linkedin, Nxtarrow, Prevarrow } from './Icon';
import Commonbtn from './Commonbtn';

const Studentsection = () => {
        return (
                <div className='s5-padding'>
                        <div className=' container position-relative'>
                                <h2 className='fs-3lg lh-72 fw-medium color-offwhite-e4 mb-5 text-center' data-aos="zoom-in">What our <span className='font-gradient'>students </span> are saying</h2>
                                <button className="swiper-button-prev d-sm-flex align-items-center justify-content-center d-none">
                                        <Prevarrow />
                                </button>
                                <Swiper
                                        spaceBetween={24}
                                        slidesPerView={1}
                                        loop={true}
                                        navigation={{
                                                prevEl: '.swiper-button-prev',
                                                nextEl: '.swiper-button-next',
                                        }}
                                        modules={[Navigation]}
                                        breakpoints={{                                           
                                                668: {
                                                        slidesPerView: 2,
                                                },
                                                1250: {
                                                        slidesPerView: 3,
                                                },
                                        }}
                                        onSlideChange={() => console.log('slide change')}
                                        onSwiper={(swiper) => console.log(swiper)}
                                >
                                        <SwiperSlide className=' h-100 '>
                                                <div className='d-flex justify-content-center'>
                                                        <div className='slidercard'>
                                                                <p className='fs-lg lh-36 text-white fw-normal mb-1'>Ross O’Rourke Founder, iC-1 Solution. CEO Agile Onboarding</p>
                                                                <p className='fw-normal fs-2sm lh-25 color-offwhite3 mb-1'>Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. </p>
                                                                <p className='fw-semibold lh-25 fs-2sm color-offwhite'>Read More...</p>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                        <div className='d-flex align-items-center gap-slider-name'>
                                                                                <img src={sliderimg1} alt="sliderimg1" className='sliderimg' />
                                                                                <div>
                                                                                        <p className='fw-normal fs-md lh-28 text-white mb-0'>Ross O’Rourke</p>
                                                                                        <p className='fw-normal fs-1sm lh-20 color-offwhite3 mb-0'>@Ross O’Rourke</p>
                                                                                </div>
                                                                        </div>
                                                                        <span className='me-4'>
                                                                                <Linkedin />
                                                                        </span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide className=' h-100 '>
                                                <div className='d-flex justify-content-center'>
                                                        <div className='slidercard'>
                                                                <p className='fs-lg lh-36 text-white fw-normal mb-1'>“Luke O’Malley Tech Lead Agile Onboarding.”</p>
                                                                <p className='fw-normal fs-2sm lh-25 color-offwhite3 mb-1'>I highly recommend kody Doherty. I have had the pleasure of working with him on variety of software projects over the past three years and his guidance has been intergral to my personal success. He is a driven, organized engineer who develops inspiring relationships with his students. </p>
                                                                <p className='fw-semibold lh-25 fs-2sm color-offwhite'>Read More...</p>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                        <div className='d-flex align-items-center gap-slider-name'>
                                                                                <img src={sliderimg2} alt="sliderimg1" className='sliderimg' />
                                                                                <div>
                                                                                        <p className='fw-normal fs-md lh-28 text-white mb-0'>Luke O’Malley</p>
                                                                                        <p className='fw-normal fs-1sm lh-20 color-offwhite3 mb-0'>@Luke O’Malley</p>
                                                                                </div>
                                                                        </div>
                                                                        <span className='me-4'>
                                                                                <Linkedin />
                                                                        </span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide className=' h-100 '>
                                                <div className='d-flex justify-content-center'>
                                                        <div className='slidercard'>
                                                                <p className='fs-lg lh-36 text-white fw-normal mb-1'>Leslie Sage Director of Data Science at DevResults</p>
                                                                <p className='fw-normal fs-2sm lh-25 color-offwhite3 mb-1'>I had the pleasure of working with Kolton in 2019. In a team of a dozen people, Kolton stood out for his curiosity and drive. He executed ambitious projects with efficiency and attention to detail. He executed ambitious projects with efficiency and attention to detail.</p>
                                                                <p className='fw-semibold lh-25 fs-2sm color-offwhite'>Read More...</p>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                        <div className='d-flex align-items-center gap-slider-name'>
                                                                                <img src={sliderimg3} alt="sliderimg1" className='sliderimg' />
                                                                                <div>
                                                                                        <p className='fw-normal fs-md lh-28 text-white mb-0'>Leslie Sage</p>
                                                                                        <p className='fw-normal fs-1sm lh-20 color-offwhite3 mb-0'>@Leslie Sage</p>
                                                                                </div>
                                                                        </div>
                                                                        <span className='me-4'>
                                                                                <Linkedin />
                                                                        </span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide className=' h-100 '>
                                                <div className='d-flex justify-content-center'>
                                                        <div className='slidercard'>
                                                                <p className='fs-lg lh-36 text-white fw-normal mb-1'>Ross O’Rourke Founder, iC-1 Solution. CEO Agile Onboarding</p>
                                                                <p className='fw-normal fs-2sm lh-25 color-offwhite3 mb-1'>Vitae elit dapibus facilisis magna. Sem amet sem ullamcorper augue magna egestas sit tempus, cras. Mauris gravida elit eget mi et vitae viverra duis eget. Aliquam, quisque gravida est pretium suscipit vel. Non blandit eget tortor netus pellentesque mauris, diam. </p>
                                                                <p className='fw-semibold lh-25 fs-2sm color-offwhite'>Read More...</p>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                        <div className='d-flex align-items-center gap-slider-name'>
                                                                                <img src={sliderimg1} alt="sliderimg1" className='sliderimg' />
                                                                                <div>
                                                                                        <p className='fw-normal fs-md lh-28 text-white mb-0'>Ross O’Rourke</p>
                                                                                        <p className='fw-normal fs-1sm lh-20 color-offwhite3 mb-0'>@Ross O’Rourke</p>
                                                                                </div>
                                                                        </div>
                                                                        <span className='me-4'>
                                                                                <Linkedin />
                                                                        </span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide className=' h-100 '>
                                                <div className='d-flex justify-content-center'>
                                                        <div className='slidercard'>
                                                                <p className='fs-lg lh-36 text-white fw-normal mb-1'>“Luke O’Malley Tech Lead Agile Onboarding.”</p>
                                                                <p className='fw-normal fs-2sm lh-25 color-offwhite3 mb-1'>I highly recommend kody Doherty. I have had the pleasure of working with him on variety of software projects over the past three years and his guidance has been intergral to my personal success. He is a driven, organized engineer who develops inspiring relationships with his students. </p>
                                                                <p className='fw-semibold lh-25 fs-2sm color-offwhite'>Read More...</p>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                        <div className='d-flex align-items-center gap-slider-name'>
                                                                                <img src={sliderimg2} alt="sliderimg1" className='sliderimg' />
                                                                                <div>
                                                                                        <p className='fw-normal fs-md lh-28 text-white mb-0'>Luke O’Malley</p>
                                                                                        <p className='fw-normal fs-1sm lh-20 color-offwhite3 mb-0'>@Luke O’Malley</p>
                                                                                </div>
                                                                        </div>
                                                                        <span className='me-4'>
                                                                                <Linkedin />
                                                                        </span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </SwiperSlide>
                                        <SwiperSlide className=' h-100 '>
                                                <div className='d-flex justify-content-center'>
                                                        <div className='slidercard'>
                                                                <p className='fs-lg lh-36 text-white fw-normal mb-1'>Leslie Sage Director of Data Science at DevResults</p>
                                                                <p className='fw-normal fs-2sm lh-25 color-offwhite3 mb-1'>I had the pleasure of working with Kolton in 2019. In a team of a dozen people, Kolton stood out for his curiosity and drive. He executed ambitious projects with efficiency and attention to detail. He executed ambitious projects with efficiency and attention to detail.</p>
                                                                <p className='fw-semibold lh-25 fs-2sm color-offwhite'>Read More...</p>
                                                                <div className='d-flex align-items-center justify-content-between'>
                                                                        <div className='d-flex align-items-center gap-slider-name'>
                                                                                <img src={sliderimg3} alt="sliderimg1" className='sliderimg' />
                                                                                <div>
                                                                                        <p className='fw-normal fs-md lh-28 text-white mb-0'>Leslie Sage</p>
                                                                                        <p className='fw-normal fs-1sm lh-20 color-offwhite3 mb-0'>@Leslie Sage</p>
                                                                                </div>
                                                                        </div>
                                                                        <span className='me-4'>
                                                                                <Linkedin />
                                                                        </span>
                                                                </div>
                                                        </div>
                                                </div>
                                        </SwiperSlide>

                                </Swiper>
                                <button className="swiper-button-next d-sm-flex align-items-center justify-content-center d-none ">
                                        <Nxtarrow />
                                </button>
                                <div className=' d-flex justify-content-center mt-5 pt-1' data-aos="zoom-in">
                                        <Commonbtn />
                                </div>
                        </div>
                </div>
        )
}

export default Studentsection;
