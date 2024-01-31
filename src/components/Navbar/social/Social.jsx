import React from 'react'
import { motion } from 'framer-motion';
import DarkMode from './../../Darkmode/DarkMode';

export const Social = () => {

    const variants = {
        iconPositionInline: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
        iconPositionUp: { opacity: 1, y: -3, }
    };

    const socialIcons = [
        { name: 'github', iconClass: 'ri-github-fill social-icon', url: "https://github.com/adilisani1" },
        { name: 'linkedin', iconClass: 'ri-linkedin-fill social-icon', url: "https://www.linkedin.com/in/aadil-isani/" },
        { name: 'behance', iconClass: 'ri-behance-fill social-icon', url: "https://www.behance.net/adiisani" },
        { name: 'whatsapp', iconClass: 'ri-whatsapp-fill social-icon', url: "https://wa.me/+923213427371" }
    ]

    return (

        <motion.div
            className='social'
            initial="iconPositionUp"
            variants={variants}
            animate="iconPositionInline"
            transition={{ duration: 0.2 }}

        >

            <DarkMode />

            {socialIcons.map((icon, index) => {
                const { iconClass, url } = icon;

                return (
                    <motion.a
                        key={index}
                        href={url}
                        target="_blank"
                        initial="iconPositionUp"
                        variants={variants}
                        animate="iconPositionInline"
                        whileHover='iconPositionUp'
                    >
                        <i className={iconClass}></i>
                    </motion.a>

                );
            })}

        </motion.div>

    )
}
