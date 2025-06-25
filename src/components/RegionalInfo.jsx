import React from 'react';
import './RegionalInfo.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


function RegionalInfo(){
    return (
        <div className="block-section">
            <h1 className="regional-info">Regional Info</h1>
            <Swiper
                className="regional-swiper"
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                slidesPerView={1}
                allowTouchMove={false}
            >
                <SwiperSlide className="regional-swiper-slide">
                    <div className="regional-info-container">
                        <h2>Los Angeles</h2>
                        <ul className='regional-info-links'>
                            <li> 
                                <a href="https://discord.gg/5A9z8feZDW" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> The Pipeline (Very Local Melee Event Server)
                                </a>
                            </li>
                            <li> 
                                <a href="https://discord.gg/dPkU7ttC2f" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> Lab Monster Discord (Long Beach Events)
                                </a>
                            </li>
                            <li> 
                                <a href="https://discord.gg/VXuZk2XX3t" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> Cal Poly Pomona Melee Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="regional-swiper-slide">
                    <div className="regional-info-container">
                        <h2>San Diego</h2>
                        <ul className='regional-info-links'>
                            <li> 
                                <a href="https://x.com/SanDiegoMelee" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-twitter"></i> San Diego Melee Twitter
                                </a>
                            </li>
                            <li> 
                                <a href="https://discord.gg/nznyZtupkA" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> San Diego Melee Discord
                                </a>
                            </li>
                            <li> 
                                <a href="https://discord.gg/M7ExHwpmSr" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> UC San Diego Melee Discord
                                </a>
                            </li>
                            <li> 
                                <a href="https://discord.gg/jmHysGFQ2G" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> San Diego State University Melee Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="regional-swiper-slide">
                    <div className="regional-info-container">
                        <h2>Orange County</h2>
                        <ul className='regional-info-links'>
                            <li> 
                                <a href="https://discord.gg/jUn8KXsEct" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> Melee Friends Activate! Discord
                                </a>
                            </li>
                            <li> 
                                <a href="https://discord.gg/8T2seh4GQF" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> UC Irvine Melee Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="regional-swiper-slide">
                    <div className="regional-info-container">
                        <h2>Inland Empire</h2>
                        <ul className='regional-info-links'>
                            <li> 
                                <a href="https://discord.gg/AMDKnGt4EE" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> San Bernardino Melee Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="regional-swiper-slide">
                    <div className="regional-info-container">
                        <h2>805 Area</h2>
                        <ul className='regional-info-links'>
                            <li> 
                                <a href="https://discord.gg/ucms2u2QaU" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> Santa Barbara Melee Discord
                                </a>
                            </li>
                            <li> 
                                <a href="https://discord.gg/gkGwa7thHK" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> Ventura County Smash Discord
                                </a>
                            </li>
                            <li> 
                                <a href="https://discord.gg/ygrT24d9j6" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> San Luis Obispo Smash Community Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="regional-swiper-slide">
                    <div className="regional-info-container">
                        <h2>Kern County</h2>
                        <ul className='regional-info-links'>
                            <li> 
                                <a href="https://discord.gg/AngWTva" target="_blank" rel="noopener noreferrer" className="regional-info-item">
                                    <i className="fa-brands fa-discord"></i> Kern County Smash Discord
                                </a>
                            </li>
                        </ul>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default RegionalInfo;