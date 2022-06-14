import styles from '../styles/Home.module.css'
import React from "react";
import Slider from "react-slick";

const Section1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true
    };
    return (
        <div className={'container my-5'} id={'Uzbekistan'}>
            <h3 className={'my-5'}><b>Uzbekistan</b></h3>
            <Slider {...settings}>
                <div>
                    <div className="card" style={{width: "16rem", background: '#F4F4F4', margin: '20px'}}>
                        <img className="card-img-top" src="/24.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Samarkand</h4>
                            <p className="card-text">Reference site about Lorem Ipsum ipsum generator.</p>
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <button className={styles.btnOutline + " btn btn-outline"}>more</button>
                                <span className={styles.heart}><i className={styles.iconHeart + " bi bi-heart"}/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" style={{width: "16rem", background: '#F4F4F4', margin: '20px'}}>
                        <img className="card-img-top" src="/23.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Bukhara</h4>
                            <p className="card-text">Reference site about Lorem Ipsum ipsum generator.</p>
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <button className={styles.btnOutline + " btn btn-outline"}>more</button>
                                <span className={styles.heart}><i className={styles.iconHeart + " bi bi-heart"}/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" style={{width: "16rem", background: '#F4F4F4', margin: '20px'}}>
                        <img className="card-img-top" src="/22.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Khiva</h4>
                            <p className="card-text">Reference site about Lorem Ipsum ipsum generator.</p>
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <button className={styles.btnOutline + " btn btn-outline"}>more</button>
                                <span className={styles.heart}><i className={styles.iconHeart + " bi bi-heart"}/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" style={{width: "16rem", background: '#F4F4F4', margin: '20px'}}>
                        <img className="card-img-top" src="/21.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Kakand</h4>
                            <p className="card-text">Reference site about Lorem Ipsum ipsum generator.</p>
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <button className={styles.btnOutline + " btn btn-outline"}>more</button>
                                <span className={styles.heart}><i className={styles.iconHeart + " bi bi-heart"}/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" style={{width: "16rem", background: '#F4F4F4', margin: '20px'}}>
                        <img className="card-img-top" src="/24.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Samarkand</h4>
                            <p className="card-text">Reference site about Lorem Ipsum ipsum generator.</p>
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <button className={styles.btnOutline + " btn btn-outline"}>more</button>
                                <span className={styles.heart}><i className={styles.iconHeart + " bi bi-heart"}/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" style={{width: "16rem", background: '#F4F4F4', margin: '20px'}}>
                        <img className="card-img-top" src="/23.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Bukhara</h4>
                            <p className="card-text">Reference site about Lorem Ipsum ipsum generator.</p>
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <button className={styles.btnOutline + " btn btn-outline"}>more</button>
                                <span className={styles.heart}><i className={styles.iconHeart + " bi bi-heart"}/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" style={{width: "16rem", background: '#F4F4F4', margin: '20px'}}>
                        <img className="card-img-top" src="/22.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Khiva</h4>
                            <p className="card-text">Reference site about Lorem Ipsum ipsum generator.</p>
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <button className={styles.btnOutline + " btn btn-outline"}>more</button>
                                <span className={styles.heart}><i className={styles.iconHeart + " bi bi-heart"}/></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card" style={{width: "16rem", background: '#F4F4F4', margin: '20px'}}>
                        <img className="card-img-top" src="/21.jpg" alt="Card image cap"/>
                        <div className="card-body">
                            <h4 className="card-title">Kakand</h4>
                            <p className="card-text">Reference site about Lorem Ipsum ipsum generator.</p>
                            <div className={'d-flex justify-content-between align-items-center'}>
                                <button className={styles.btnOutline + " btn btn-outline"}>more</button>
                                <span className={styles.heart}><i className={styles.iconHeart + " bi bi-heart"}/></span>
                            </div>
                        </div>
                    </div>
                </div>

            </Slider>
        </div>
    );
};

export default Section1;