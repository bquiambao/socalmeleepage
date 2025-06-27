import React from 'react';
import './Replays.css';
import { motion } from 'framer-motion';

function Replays(){
    return (
        <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            transition={{
                type: "tween",
                duration: 0.5,
                ease: "easeInOut", 
                delay: 0.2
            }}
        >
            <div className="block-layout">
                <div className="block-section">
                    <div className="replays-card slippi">
                        <h1 className="replays-header"><img className="slippi-logo" src='/images/slippilogo.svg'/>Slippi Replays</h1>
                        <ul className="replays-link-list">
                            <li> 
                                <a href="https://slippi-replays-demo.s3.amazonaws.com/index.html#replays/" target="_blank" rel="noopener noreferrer" className="replays-link"> 
                                    Los Angeles Events Slippi Replays <br/>
                                    (Includes McClouds Melee Co., Midnight Melee, and Deyve's Smash Bash)
                                </a>
                            </li>
                            <li> 
                                <a href="https://replays.p0ke.dev/" target="_blank" rel="noopener noreferrer" className="replays-link"> 
                                    San Diego Events Slippi Replays <br/>
                                    (Includes Rage Against the CRT and Mission Complete)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="block-section">
                    <div className="replays-card youtube">
                        <h1 className="replays-header"><i className="yt-logo fa-brands fa-youtube"></i>Tournament Stream VODs</h1>
                        <ul className="replays-link-list">
                            <li> 
                                <a href="https://www.youtube.com/@schmoopDJ" target="_blank" rel="noopener noreferrer" className="replays-link"> 
                                    Very Local Melee VODs <br/>
                                    (Includes McClouds Melee Co. and Deyve's Smash Bash)
                                </a>
                            </li>
                            <li> 
                                <a href="https://www.youtube.com/@OBE_VODs" target="_blank" rel="noopener noreferrer" className="replays-link"> 
                                    OBE VODs <br/>
                                    (Includes Rage Against the CRT and Mission Complete)
                                </a>
                            </li>
                            <li> 
                                <a href="https://www.youtube.com/@OCMelee" target="_blank" rel="noopener noreferrer" className="replays-link"> 
                                    OC Melee VODs <br/>
                                    (Includes Melee Friends Activate!)
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Replays;