import React from 'react';
import '../../App.css';
import {motion} from 'framer-motion';

function About(){
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
            <div className="about-section">
                <div className="about-photo-section">
                    <img className="about-photo" src='/images/finalverdugocrowd.jpg'/>
                    <div className="about-section-photo-credit">
                        <p>Credit: @Jeff_in_3D / jeffin3d.pixieset.com</p>
                    </div>
                </div>
                <div className="about-section-text">
                    Southern California is both an iconic landmark and a current 
                    hotspot for the competitive Super Smash Bros. Melee scene.
                </div>
            </div> 
        </motion.div>
    )
}

export default About;