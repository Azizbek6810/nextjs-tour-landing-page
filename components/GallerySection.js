import React from 'react';
import styles from '../styles/Home.module.css'

const GallerySection = () => {
    return (
        <div className={'container my-5'} id={'Gallery'}>
            <h3><b>Gallery</b></h3>
            <div className="row">
                <div className="col-lg-4 h-100">
                    <img style={{width:'100%'}} className={styles.imgGallery + ' mx-3 mt-3'} src={'/turkey.jpg'} alt={'turkey'}/>
                    <img style={{width:'100%'}} className={styles.imgGallery + ' mx-3 mt-3'} src={'/xiva.jpg'} alt={'xiva'}/>
                </div>
                <div className="col-lg-4 h-100">
                    <img style={{width:'100%'}} className={styles.imgGallery + ' mx-3 mt-3'} src={'/tourists.jpg'} alt={'tourists'}/>
                </div>
                <div className="col-lg-4">
                    <img style={{width:'100%'}} className={styles.imgGallery + ' mx-3 mt-3'} src={'/registan.jpg'} alt={'registan'}/>
                    <img style={{width:'100%'}} className={styles.imgGallery + ' mx-3 mt-3'} src={'/bukhara.jpg'} alt={'bukhara'}/>
                </div>
            </div>
        </div>
    );
};

export default GallerySection;