import React, { useState } from 'react';
import './sidebar.scss';
import ToggleButton from './toggleButton/ToggleButton';
import Links from './Links/Links';
import { AnimatePresence, motion, useCycle, MotionConfig } from "framer-motion";

const Sidebar = () => {

    const [openN, toggleNav] = useCycle(false, true);

    const clipPath = {
        // open: {
        //     clipPath: "circle(1200px at 50px 50px)",
        //     transition: {
        //         type: "spring",
        //         stiffness: 50,
        //     }
        // },
        // closed: {
        //     clipPath: "circle(30px at 50px 50px)",
        //     transition: {
        //         delay: 0.5,
        //         type: "spring",
        //         stiffness: 400,
        //         damping: 20
        //     }
        // }
    }
    const variants = {
        open: {
            x: "0%",
            transition: {
                type: "spring",
                bounce: 0.099,
                when: "beforeChildren",
            }

        },
        closed: {
            x: "-100%",
            transition: {
                type: "spring",
                bounce: 0.099,
                when: "afterChildren",

            }
        },

    }

    return (
        <>
            <AnimatePresence>
                {openN && (
                    <MotionConfig transition={{
                        type: "spring",
                        bounce: 0.099,
                    }}>
                        <motion.div
                            className='bg'
                            key="nav-menu"
                            variants={variants}
                            initial="closed"
                            animate={openN ? 'open' : 'closed'}
                            exit="closed">
                            <Links />
                        </motion.div>

                    </MotionConfig>
                )}

            </AnimatePresence>
            <ToggleButton toggleNav={toggleNav} openN={openN} />
        </>
    )
}

export default Sidebar