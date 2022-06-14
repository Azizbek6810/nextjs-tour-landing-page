import React from 'react';
import styles from '../styles/Home.module.css'

const NewsSection = () => {
    return (
        <div className={'container my-5'} id={'News'}>
            <h3><b>News</b></h3>
            <div className="row my-4">
                <div
                    className={styles.colNews + " col mx-2"}
                    style={{
                        borderRadius: "20px",
                        padding: '40px'
                    }}
                >
                    <h5 className={styles.pNews}><b>Samarkand site about<br/> Lorem Ipsum.</b></h5>
                    <p className={styles.pNews}>
                        The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum
                        <span className={styles.spanNews}> passages,</span> and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button className={styles.btnNews + ' btn'}>
                        <b>Read more</b>
                    </button>
                </div>
                <div
                    className={styles.colNews + " col mx-2"}
                    style={{
                        borderRadius: "20px",
                        padding: '40px'
                    }}
                >
                    <h5 className={styles.pNews}><b>Namangan site about <br/> Lorem Ipsum.</b></h5>
                    <p className={styles.pNews}>
                        The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum
                        <span className={styles.spanNews}> passages,</span> and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button className={styles.btnNews + ' btn'}>
                        <b>Read more</b>
                    </button>
                </div>
                <div
                    className={styles.colNews + " col mx-2"}
                    style={{
                        borderRadius: "20px",
                        padding: '40px'
                    }}
                >
                    <h5 className={styles.pNews}><b>Khiva site about<br/> Lorem Ipsum.</b></h5>
                    <p className={styles.pNews}>
                        The leap into electronic typesetting, remaining essentially unchanged. It was popularised in the
                        1960s with the release of Letraset sheets containing Lorem Ipsum
                        <span className={styles.spanNews}> passages,</span> and more recently
                        with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <button className={styles.btnNews + ' btn'}>
                        <b>Read more</b>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NewsSection;