import React, { useRef, useState, useEffect } from 'react'
import './About.scss';
import { motion, useAnimation } from 'framer-motion';


let imageOne = '/2.png';
let imageTwo = '/2.png'

const About = () => {

    const certificates = [
        {
            id: 1,
            cardNumber: 1,
            year: 2021,
            imgSrc: imageOne,
        },
        {
            id: 2,
            cardNumber: 2,
            year: 2022,
            imgSrc: imageTwo,
        },
        {
            id: 3,
            cardNumber: 3,
            year: 2023,
            imgSrc: imageOne,
        }, {
            id: 4,
            cardNumber: 3,
            year: 2023,
            imgSrc: imageOne,
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [width, setWidth] = useState(0);
    const carouselRef = useRef(null);
    const controls = useAnimation();
    // const [showRightButton, setShowRightButton] = useState(false);
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const handlePrev = () => {
        setCurrentSlide((prev) => {
            const newSlide = prev === 0 ? certificates.length - 1 : prev - 1;
            setShowRightButton(true);
            setShowLeftButton(newSlide !== 0);
            return newSlide;
        });
    };

    const handleNext = () => {
        setCurrentSlide((prev) => {
            const newSlide = prev === certificates.length - 1 ? 0 : prev + 1;
            setShowLeftButton(true);
            setShowRightButton(newSlide !== certificates.length - 1);
            return newSlide;
        });
    };

    // useEffect(() => {
    //     console.log(carouselRef.current.scrollWidth, carouselRef.current.offsetWidth)
    //     setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    // }, [])
    useEffect(() => {
        setWidth(carouselRef.current.scrollWidth / certificates.length);
    }, [currentSlide]);

    useEffect(() => {
        controls.start({ x: -currentSlide * width, transition: { duration: 0.5 } });
    }, [currentSlide, controls, width]);


    // useEffect(() => {
    //     setWidth(900);
    // }, [currentSlide]);



    // const handlePrev = () => {
    //     setCurrentSlide((prev) => (prev === 0 ? certificates.length - 1 : prev - 1));
    // };

    // const handleNext = () => {
    //     setCurrentSlide((prev) => (prev === certificates.length - 1 ? 0 : prev + 1));
    // };

    // useEffect(() => {
    //     const updateWidth = () => {
    //         if (carouselRef.current) {  
    //             setWidth(carouselRef.current.offsetWidth);
    //         }
    //     };

    //     updateWidth();

    //     window.addEventListener('resize', updateWidth);

    //     return () => {
    //         window.removeEventListener('resize', updateWidth);
    //     };
    // }, [carouselRef]);

    // useEffect(() => {
    //     if (width > 0) {
    //         controls.start({ x: -currentSlide * width, transition: { duration: 0.5 } });
    //     }
    // }, [currentSlide, controls, width]);


    return (
        <div className='about'>
            <div className='about-container'>
                <div className='about-wrapper'>

                    <div className='about-text-container'>
                        <div className='about-me'>
                            <h3 className='about-me-title'>
                                About Me
                            </h3>
                            <div className='border-bottom'></div>
                        </div>
                        <p className='about-text'>I am a skilled web developer proficient in React JS, Redux,  and WordPress, with a strong background in JavaScript. </p>
                        <p className='about-text'> Despite the challenges posed by Muscular Dystrophy and being wheelchair-bound for the past 10 years, I have continued to excel and demonstrate my ability to multitask and deliver high-quality work.
                        </p>
                    </div>

                    <div className='skills-wrapper'>
                        <div className='skills'>

                            <div className='items'>
                                <div className="item-data">
                                    <div className="mr-30">
                                        <div className="img icon-img-40">
                                            <img src="/react.png" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="fz-18">React JS</h4>
                                    </div>
                                </div>
                                <div className="skill-progress">
                                    <span className="progress" style={{ width: "270px" }} />
                                </div>
                            </div>

                            <div className='items'>
                                <div className="item-data">
                                    <div className="mr-30">
                                        <div className="img icon-img-40">
                                            <img src="/nodejs.png" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="fz-18">Node JS</h4>
                                    </div>
                                </div>
                                <div className="skill-progress">
                                    <span className="progress" style={{ width: "230px" }} />
                                </div>
                            </div>
                            <div className='items'>
                                <div className="item-data">
                                    <div className="mr-30">
                                        <div className="img icon-img-40">
                                            <img src="/figma.png" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="fz-18">UI / UX Design</h4>
                                    </div>
                                </div>
                                <div className="skill-progress">
                                    <span className="progress" style={{ width: "170px" }} />
                                </div>
                            </div>
                            <div className='items'>
                                <div className="item-data">
                                    <div className="mr-30">
                                        <div className="img icon-img-40">
                                            <img src="/wordpress.png" alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="fz-18">WordPress</h4>
                                    </div>
                                </div>
                                <div className="skill-progress">
                                    <span className="progress" style={{ width: "200px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>



                {/* <motion.div
                            ref={carouselRef}
                            drag="x"
                            dragConstraints={{ right: 0, left: -width }}
                            animate={controls}
                            className="rowFlex"
                        >
                            {certificates.map((item) => (
                                <motion.div className='c-cards' key={item.id}>
                                    <div className='c-cards-top'>
                                        <div>
                                            <span>{item.cardNumber}</span>
                                        </div>
                                        <div className="ml-auto">
                                            <span>{item.year}</span>
                                        </div>
                                    </div>
                                    <div className='c-main-content'>
                                        <div className="img icon-img-100 mt-80 mb-30">
                                            <img src={item.imgSrc} alt="" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div> */}
                {/* <button
                            onClick={handlePrev}
                            className="left-btn absolute left-0 top-[60%] z-30 rounded-r-xl bg-slate-100/30 p-3 pl-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pl-3"
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="2em"
                                width="2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="15 18 9 12 15 6" />
                            </svg>

                        </button>
                        <button
                            onClick={handleNext}
                            className="right-btn  top-[60%] z-30 rounded-l-xl bg-slate-100/30 p-3 pr-2 text-4xl text-white backdrop-blur-sm transition-[padding] hover:pr-3"
                        >
                            <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="2em"
                                width="2em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <polyline points="9 18 15 12 9 6" />
                            </svg>
                        </button> */}


            </div>
            <motion.div
                className='certificates'
                ref={carouselRef}
                whileTap={{ cursor: 'grabbing' }}>
                <motion.div
                    className='max-w-6xl inner-carousel'
                    // drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    animate={controls}>
                    <div className='flex' style={{ transform: "none" }}>
                        <div className='card'>
                            <h2 className=''>
                                01
                            </h2>
                            <div className='card_header'>
                                <h3 className='title'>
                                    <p className='text-grey mb-5'>Full-Stack Web Development with React</p>
                                </h3>
                            </div>
                            <div className='card_img'>
                                <img src="/2.png" alt="" />
                            </div>
                            <div className='card_footer'>
                                <p className='text-grey'>Issued Dec 2022</p>
                                <p className='text-grey'>Coursera</p>
                            </div>
                        </div>
                        <div className='card'>
                            <h2 className=''>
                                01
                            </h2>
                            <div className='card_header'>
                                <h3 className='title'>
                                    <p className='text-grey mb-5'>Full-Stack Web Development with React</p>
                                </h3>
                            </div>
                            <div className='card_img'>
                                <img src="/2.png" alt="" />
                            </div>
                            <div className='card_footer'>
                                <p className='text-grey'>Issued Dec 2022</p>
                                <p className='text-grey'>Coursera</p>
                            </div>
                        </div>
                        <div className='card'>
                            <h2 className=''>
                                01
                            </h2>
                            <div className='card_header'>
                                <h3 className='title'>
                                    <p className='text-grey mb-5'>Full-Stack Web Development with React</p>
                                </h3>
                            </div>
                            <div className='card_img'>
                                <img src="/2.png" alt="" />
                            </div>
                            <div className='card_footer'>
                                <p className='text-grey'>Issued Dec 2022</p>
                                <p className='text-grey'>Coursera</p>
                            </div>
                        </div>
                        <div className='card'>
                            <h2 className=''>
                                01
                            </h2>
                            <div className='card_header'>
                                <h3 className='title'>
                                    <p className='text-grey mb-5'>Full-Stack Web Development with React</p>
                                </h3>
                            </div>
                            <div className='card_img'>
                                <img src="/2.png" alt="" />
                            </div>
                            <div className='card_footer'>
                                <p className='text-grey'>Issued Dec 2022</p>
                                <p className='text-grey'>Coursera</p>
                            </div>
                        </div>
                        <div className='card'>
                            <h2 className=''>
                                01
                            </h2>
                            <div className='card_header'>
                                <h3 className='title'>
                                    <p className='text-grey mb-5'>Full-Stack Web Development with React</p>
                                </h3>
                            </div>
                            <div className='card_img'>
                                <img src="/2.png" alt="" />
                            </div>
                            <div className='card_footer'>
                                <p className='text-grey'>Issued Dec 2022</p>
                                <p className='text-grey'>Coursera</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {showLeftButton && (
                    <button onClick={handlePrev} className="left-btn">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="2em"
                            width="2em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polyline points="15 18 9 12 15 6" />
                        </svg>
                    </button>
                )}
                {showRightButton && (
                    <button onClick={handleNext} className="right-btn">
                        <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth={2}
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="2em"
                            width="2em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <polyline points="9 18 15 12 9 6" />
                        </svg>
                    </button>
                )}

            </motion.div>
        </div >
    )
}

export default About