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
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                slidesPerView={1}
            >
                <SwiperSlide>
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
                <SwiperSlide>
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
                <SwiperSlide>
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
            </Swiper>
        </div>
    );
}

export default RegionalInfo;