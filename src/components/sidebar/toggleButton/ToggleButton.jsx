
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion";

const ToggleButton = ({ toggleNav, openN }) => {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {

        const handleResize = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);

    }, []);

    const mobileBreakpoint = 600;
    const desktopBreakpoint = 1912;

    const variants = {
        open: {

            transition: {
                type: "spring",
                bounce: 0.5,
                when: "beforeChildren",

            },

        },
        closed: {

            transition: {
                type: "spring",
                bounce: 0.5,
                when: "afterChildren",
            }
        },

    }


    return (
        // <div onClick={() => { setOpen(!open) }} className="button">
        //     <div className={`burger ${open ? "burgerActive" : ""}`}></div>
        // </div>   
        <>

            <motion.div
                variants={variants}
                initial="closed"
                animate={openN ? 'open' : 'closed'}
                exit="closed"
                className="button" onClick={() => toggleNav()}>
                <div className={`burger ${openN ? "burgerActive" : ""}`}></div>
            </motion.div>


        </>

    )
}

export default ToggleButton