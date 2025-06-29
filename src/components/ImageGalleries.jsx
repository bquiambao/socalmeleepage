import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./ImageGalleries.css";
import {AnimatePresence, motion} from 'framer-motion';

const galleries = {
    rankings: {
        label: "Rankings",
        thumb: "/images/rankings/SummerWinter2024Rankings.png",
        images: [
            { 
                src: "/images/rankings/SummerWinter2024Rankings.png",
                caption: "SoCal Summer-Winter 2024 Power Rankings",
                credit: "@OTTO_ssbm" 
            },
            { 
                src: "/images/rankings/WinterSpring2024Rankings.jpg",
                caption: "SoCal Winter-Spring 2024 Power Rankings",
                credit: "@OTTO_ssbm"  
            },
            { 
                src: "/images/rankings/SummerWinter2023Rankings.png",
                caption: "SoCal Summer-Winter 2023 Power Rankings",
                credit: "@OTTO_ssbm"  
            },
            { 
                src: "/images/rankings/Summer2023Rankings.png",
                caption: "SoCal Summer 2023 Power Rankings",
                credit: "@IggyNieves"  
            },
            { 
                src: "/images/rankings/SummerWinter2021Rankings.png",
                caption: "SoCal Summer-Winter 2021 Power Rankings",
                credit: "@IggyNieves"  
            },
            { 
                src: "/images/rankings/FallWinter2019Rankings.png",
                caption: "SoCal Fall-Winter 2019 Power Rankings"  
            },
            { 
                src: "/images/rankings/Summer2019Rankings.png",
                caption: "SoCal Summer 2019 Power Rankings"  
            },
            { 
                src: "/images/rankings/WinterSpring2019Rankings.png",
                caption: "SoCal Winter-Spring 2019 Power Rankings"  
            },
        ]
    },
    localReport1: {
        label: "Local Report #1 by Josh Kano",
        thumb: "/images/localreport1/page1.jpg",
        images: [
            { 
                src: "/images/localreport1/page1.jpg" 
            },
            { 
                src: "/images/localreport1/page2.jpg" 
            },
            { 
                src: "/images/localreport1/page3.jpg" 
            },
            { 
                src: "/images/localreport1/page4.jpg" 
            },
            { 
                src: "/images/localreport1/page5.jpg" 
            },
        ]
    },
    localReport2: {
        label: "Local Report #2 by Josh Kano",
        thumb: "/images/localreport2/page1.jpg",
        images: [
            { 
                src: "/images/localreport2/page1.jpg" 
            },
            { 
                src: "/images/localreport2/page2.jpg" 
            },
            { 
                src: "/images/localreport2/page3.jpg" 
            },
            { 
                src: "/images/localreport2/page4.jpg" 
            }
        ]
    }
}

function ImageGalleries() {
    const [selectedGallery, setSelectedGallery] = useState(null); 
    const [lightboxIndex, setLightboxIndex] = useState(-1);

    const openGallery = galleries[selectedGallery]?.images || [];

    return (
        
        <div className="gallery-container">
            {!selectedGallery ? (
                <div className="thumbnail-row">
                {Object.entries(galleries).map(([key, gallery]) => (
                    <div
                    key={key}
                    className="thumbnail-wrapper"
                    onClick={() => setSelectedGallery(key)}
                    >
                        <img
                            src={gallery.thumb}
                            alt={gallery.label}
                            className="thumbnail-image"
                        />
                        <p className="thumbnail-label">{gallery.label}</p>
                    </div>
                ))}
                </div>
            ) : (
                <AnimatePresence mode="wait">
                    <motion.div
                        initial={{ opacity: 0}}
                        animate={{ opacity: 1}}
                        transition={{
                            type: "tween",
                            duration: 0.5,
                            ease: "easeInOut", 
                            delay: 0.3
                        }}
                    >
                        <div className="back-button-and-gallery">
                            <button className="back-button" onClick={() => setSelectedGallery(null)}>
                                ← Back
                            </button>
                            <div className="image-grid">
                                {openGallery.map((img, index) => (
                                    <div className="grid-image-wrapper">
                                        <img
                                            key={index}
                                            src={img.src}
                                            alt={`Gallery Image ${index + 1}`}
                                            className="grid-thumb"
                                            onClick={() => setLightboxIndex(index)}
                                        />
                                        <div className="grid-image-text-section">
                                            {img.caption && <p>{img.caption}</p>}
                                            {img.credit && <p>Credit: {img.credit}</p>}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            )}

            <Lightbox
                open={lightboxIndex >= 0}
                close={() => setLightboxIndex(-1)}
                index={lightboxIndex}
                slides={openGallery}
            />
        </div>

    );
}

export default ImageGalleries;
