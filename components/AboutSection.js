import React from 'react';
import styles from "../styles/Home.module.css";

const AboutSection = () => {
    return (
        <div className={'container-fluid my-5'} id={'About'}>
            <h3 className={'my-5'} style={{marginLeft: '8%'}}><b>About us</b></h3>
            <div className={'row'} style={{marginLeft: '8%'}}>
                <div className={'col-lg-4'}>
                    <img className={styles.imgGallery} style={{width: '394px'}} src={'/uzb.jpg'} alt={'uzb'}/>
                </div>
                <div className="col-lg-8"
                     style={{background: '#F5F5F5', height: '40vh', marginTop: '20px', padding: '50px'}}>
                    <div>
                        <h5 style={{fontFamily: 'Poppins'}}><b>Uzbekistan</b></h5>
                        <p style={{fontFamily: 'Poppins'}}>
                            Reference site about Lorem Ipsum, giving information on its origins, as well as a random
                            Lipsum generator Lorem Ipsum, giving information on its origins, as well as a random Lipsum
                            genera.
                        </p>
                        <button style={{fontFamily: 'Poppins'}} className={'btn btn-outline-secondary text-center'}>
                            <b>Read more</b> <i className="bi bi-arrow-right-short"/></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;