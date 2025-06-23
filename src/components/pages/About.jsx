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
                    It is home to one of the most passionate communities in the greater
                    scene. There are tournaments every week, ranging from Los Angeles 
                    to San Diego, where anyone can enter, play outside of tournament, or
                    even just spectate! You can even grab a drink and just enjoy the Melee with
                    some friends at some of our featured tournaments!         
                </div>
            </div> 
        </motion.div>
    )
}

export default About;