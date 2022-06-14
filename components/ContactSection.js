import React from 'react';
import styles from '../styles/Home.module.css'
import Link from "next/link";

const ContactSection = () => {
    return (
        <div className={'container my-5'} id={"Contact"}>
            <h3 className={'my-5'}><b>Contact</b></h3>
            <div className={styles.rowContact + ' row'}>
                <div className={styles.colContact + " col-lg-5"} style={{fontFamily: 'Poppins'}}>
                    <h2><b>Contact</b></h2>
                    <p>
                        Reference site about Lorem Ipsum, giving information
                        on its origins, as well as a random Lipsum
                        generator ation on its origins, as well .
                    </p>
                    <div>
                        <div className={'d-flex align-items-center my-4'}>
                            <i className={styles.iconContact + " bi bi-telephone-fill"} style={{marginRight: '10px'}}/>
                            <b>+998 94 646 35 32</b>
                        </div>
                        <div className={'d-flex align-items-center my-4'}>
                            <i className={styles.iconContact + " bi bi-envelope-fill"} style={{marginRight: '10px'}}/>
                            <Link href={'mailto:boburkhon@gmail.com'}><b>boburkhon@gmail.com</b></Link>
                        </div>
                        <div className={'d-flex align-items-center my-4'}>
                            <i className={styles.iconContact + " bi bi-geo-alt-fill"} style={{marginRight: '10px'}}/>
                            <Link
                                href={'https://www.google.com/maps/place/School+219/@41.3702233,69.2151764,16z/data=!4m5!3m4!1s0x38ae8c4a5876c643:0x85f080a15a9d72ae!8m2!3d41.3698757!4d69.2182657'}><b>Boburshox
                                4.10</b></Link>
                        </div>
                        <div className={'d-flex align-items-center mt-4'}>
                            <Link href={'https://telegram.me'}><i className={styles.iconContact + " bi bi-telegram"}
                                                                  style={{marginRight: '30px'}}/></Link>
                            <Link href={'https://www.facebook.com'}><i
                                className={styles.iconContact + " bi bi-facebook"}
                                style={{marginRight: '30px'}}/></Link>
                            <Link href={'http://www.instagram.com'}><i
                                className={styles.iconContact + " bi bi-instagram"}/></Link>
                        </div>
                    </div>
                </div>
                <div className={'col-lg-7'}>
                    <div className="d-flex justify-content-around align-items-center m-4">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Full name"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                        <input
                            type="number"
                            className="form-control mx-3"
                            placeholder="Phone number"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                        />
                    </div>
                    <input
                        required
                        type="email"
                        className="form-control m-4"
                        placeholder="Your email"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    <textarea rows={'5'} className="form-control m-4" aria-label="With textarea"
                              placeholder={'Message '}/>
                    <button className={styles.buttonContact + ' btn mx-4'}><b>Send message</b></button>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;