import React from 'react';
import Link from "next/link";
import Image from 'next/image'
import logo from '../public/tour.png'
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={'container'}>
            <nav className="navbar navbar-light justify-content-between">
                <Link href={'/'}><Image style={{cursor: 'pointer'}} src={logo} alt={'logo'}/></Link>
                <div className={'d-flex justify-content-evenly'}>
                    <Link href={'/'}><a className={styles.link + " navbar-brand"}>Home</a></Link>
                    <Link href={'/#About'}><a className={styles.link + " navbar-brand"}>About us</a></Link>
                    <Link href={'/#Uzbekistan'}><a className={styles.link + " navbar-brand"}>Central Asia</a></Link>
                    <Link href={'/#Gallery'}><a className={styles.link + " navbar-brand"}>Gallery</a></Link>
                    <Link href={'/#News'}><a className={styles.link + " navbar-brand"}>News</a></Link>
                    <Link href={'/#Contact'}><a className={styles.link + " navbar-brand"}>Contact</a></Link>
                </div>
                <form className="form-inline d-flex align-items-center">
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1"><i className="bi bi-search"/></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search tour" aria-label="Username"
                               aria-describedby="basic-addon1"/>
                    </div>
                </form>
            </nav>
        </div>
    );
};

export default Navbar;