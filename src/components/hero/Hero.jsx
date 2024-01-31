import React from 'react'
import './hero.scss';
import { motion } from 'framer-motion';

const textVariants = {
    initial: {
        y: 600,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
            type: "spring",

        }
    },

}

const imgOptimize = {

    initial: {
        x: 500,
        opacity: 0
    },
    imgAnimate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1.5,
            staggerChildren: 0.1,
            type: "spring",

        }
    }
}

const Hero = () => {

    return (
        <div className='hero'>
            <div className='right-circle'></div>
            <div className='left-circle'></div>
            <div className='rowItems'>
                <div className='wrapper'>
                    <motion.div className='textContainer' initial="initial" animate="animate" variants={textVariants}>
                        <motion.h2 variants={textVariants}>Muhammad Adil</motion.h2>
                        <motion.h1 variants={textVariants}>Frontend Wizard & Gamer <br /> DeveloperOnWheels</motion.h1>
                        <motion.p variants={textVariants}>Where Passion Meets Precision: Unleashing Innovation from a Wheelchair,
                            Crafting Seamless Digital Experiences with React JS, Redux & WordPress,
                            Defying Gravity, Redefining Web Development.
                        </motion.p>
                        <motion.div variants={textVariants} className='buttons'>
                            <button className='resume'>Resume</button>
                            {/* <button className='contact'>Contact Me</button> */}
                        </motion.div>
                    </motion.div>
                </div>

                <div className='person'>
                    <motion.div
                        initial="initial"
                        animate="imgAnimate"
                        variants={imgOptimize}
                        className='imgContainer'>
                        <span className='circle'></span>
                        <img className='profile' src='/avatar-new.png' alt="" />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
export default Hero