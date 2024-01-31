import { motion, useInView, useAnimation } from 'framer-motion';
import React, { useRef, useEffect } from 'react';

const TestBox = () => {

    const ref = useRef(null)
    const mainControls = useAnimation();
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            mainControls.start('onscreen')
        }

    }, [isInView])

    return (
        <div ref={ref} className='course'>
            <motion.div
                variants={
                    {
                        offscreen: {
                            y: 300
                        },
                        onscreen: {
                            y: 50,
                            rotate: -10,
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 0.8
                            }
                        }
                    }
                }
                initial="offscreen"
                className='box'
                whileInView="onscreen"
                animate={mainControls}
            >
            </motion.div>
        </div>
    );
};

export default TestBox;
