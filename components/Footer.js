import React from 'react';
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Footer = () => {
    return (
        <div style={{background: '#E8E8E8'}}>
            <div className={'container mt-5 py-5'}>
                <div className="row align-items-center">
                    <img style={{cursor: 'pointer'}} className={'col-lg-1'} src={'/tour.png'} alt={'tour'}/>
                    <div className={'col-lg-6 offset-lg-1 d-flex justify-content-evenly'}>
                        <Link href={'/'}><a className={styles.aFooter}>Home</a></Link>
                        <Link href={'/#About'}><a className={styles.aFooter}>About us</a></Link>
                        <Link href={'/#Uzbekistan'}><a className={styles.aFooter}>Central Asia</a></Link>
                        <Link href={'/#Gallery'}><a className={styles.aFooter}>Gallery</a></Link>
                        <Link href={'/#News'}><a className={styles.aFooter}>News</a></Link>
                        <Link href={'/#Contact'}><a className={styles.aFooter}>Contact</a></Link>
                    </div>
                    <div className={'col-lg-2 d-flex align-items-center'}>
                        <i className={styles.iconContact + " bi bi-telephone-fill"} style={{marginRight: '10px'}}/>
                        <Link href={'tel:+998 94 646 35 32'}><b style={{cursor: 'pointer'}}>+998 94 646 35 32</b></Link>
                    </div>
                    <div className={'col-lg-2 d-flex align-items-center'}>
                        <Link href={'https://telegram.me'}><i className={styles.iconContact + " bi bi-telegram"}
                                                              style={{marginRight: '30px'}}/></Link>
                        <Link href={'https://www.facebook.com'}><i className={styles.iconContact + " bi bi-facebook"}
                                                                   style={{marginRight: '30px'}}/></Link>
                        <Link href={'http://www.instagram.com'}><i className={styles.iconContact + " bi bi-instagram"}/></Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;