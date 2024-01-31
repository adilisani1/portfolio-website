import { motion } from 'framer-motion';
import React from 'react';

const Test = () => {
    const variants = {
        iconPositionInline: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
        iconPositionUp: { opacity: 1, y: -10, }
    };

    return (
        <div className='course'>
            <motion.div
                className='box'
                variants={variants}
                initial='hidden'
                animate='iconPositionInline'
                whileHover='iconPositionUp'
                transition={{ duration: 0.2 }}
            >
            </motion.div>
        </div>
    );
};

export default Test;
