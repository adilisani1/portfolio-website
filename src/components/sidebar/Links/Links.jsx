
import React from 'react'
import { motion } from 'framer-motion';


const variants = {
    open: {
        y: '0%',
        opacity: 1,
        transition: {
            type: "spring",
            bounce: 0.5,
            when: "beforeChildren",
            // staggerChildren: 0.1
        }
    },
    closed: {
        y: '-25%',
        opacity: 0,
        transition: {
            type: "spring",
            bounce: 0.5,
            // staggerChildren: 0.2,
            // staggerDirection: -1,
            when: "afterChildren",
        }
    },


}
// const itemVariants = {
//     open: {
//         y: '0%',
//         opacity: 1,

//     },
//     closed: {
//         y: '50%',
//         opacity: 0,

//     }
// }
const Links = () => {

    const menuLinks = ['Home', 'About', 'Services', 'Portfolio', 'Contact']


    return (
        <motion.div className='links' variants={variants}>
            {menuLinks.map((item) => (
                <motion.a
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    key={item}
                    href={`#${item}`}>
                    {item}


                </motion.a>
            ))}
        </motion.div>
    )
}

export default Links