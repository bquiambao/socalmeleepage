import React from 'react';
import '../../App.css';
import {motion} from 'framer-motion';
import ImageGalleries from '../ImageGalleries';

function Archive(){
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
            <div className='archive-section'>
                <ImageGalleries/>
            </div>
        </motion.div>
    )
}

export default Archive;