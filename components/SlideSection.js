import React from 'react';
import {Carousel} from "react-bootstrap";
import styles from "../styles/Home.module.css";

const SlideSection = () => {
    return (
        <div>
            <Carousel controls={false} id={'Slider'} >
                <Carousel.Item className={styles.relative}>
                    <img
                        className={styles.carousel + " d-block w-100"}
                        src="/bg1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className={styles.home}>
                            <h3 style={{color: 'black', marginTop: '60px', marginBottom: '50px'}}><b>We wish you the
                                most beautiful<br/> and pleasant holiday</b></h3>
                            <div className={'row d-flex justify-content-center'} style={{marginLeft: '20px'}}>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Central Asia
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Uzbekistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Kyrgyzstan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Turkmenistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Tajikistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Kazakhstan
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.carousel + " d-block w-100"}
                        src="/2345.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className={styles.home}>
                            <h3 style={{color: 'black', marginTop: '60px', marginBottom: '50px'}}><b>We wish you the
                                most beautiful<br/> and pleasant holiday</b></h3>
                            <div className={'row d-flex justify-content-center'} style={{marginLeft: '20px'}}>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Central Asia
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Uzbekistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Kyrgyzstan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Turkmenistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Tajikistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Kazakhstan
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.carousel + " d-block w-100"}
                        src="/45678.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className={styles.home}>
                            <h3 style={{color: 'black', marginTop: '60px', marginBottom: '50px'}}><b>We wish you the
                                most beautiful<br/> and pleasant holiday</b></h3>
                            <div className={'row d-flex justify-content-center'} style={{marginLeft: '20px'}}>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Central Asia
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Uzbekistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Kyrgyzstan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Turkmenistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Tajikistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Kazakhstan
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.carousel + " d-block w-100"}
                        src="/4567890.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <div className={styles.home}>
                            <h3 style={{color: 'black', marginTop: '60px', marginBottom: '50px'}}><b>We wish you the
                                most beautiful<br/> and pleasant holiday</b></h3>
                            <div className={'row d-flex justify-content-center'} style={{marginLeft: '20px'}}>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Central Asia
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Uzbekistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Kyrgyzstan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Turkmenistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Tajikistan
                                </div>
                                <div className={styles.miniCard + ' col-3'}
                                     style={{color: 'black', background: 'white', borderRadius: "10px"}}>Kazakhstan
                                </div>
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default SlideSection;