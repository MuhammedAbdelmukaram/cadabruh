import React from 'react';
import CursorEffect from "@/app/components/CursorEffect";
import Header from "@/app/components/Header";
import styles from "./Page.module.css";

const Page = () => {
    return (
        <div className="wrapper">
            <Header />
            <main className="page">
                <section className="page__hero hero">
                    <div className="hero__container">
                        <div className="hero__top">
                            <h1 className="hero__title">Transact Freely</h1>
                            <div className="hero__text">
                                <p>Cadabruh, making your on-chain swaps quick and anonymous</p>
                            </div>
                        </div>
                        {/* Responsive iframe wrapper */}
                        <div className={styles.iframeWrapper}>
                            <iframe
                                src="https://houdiniswap.com/?partnerId=2&widgetMode=true"
                                className={styles.iframe}
                                allow="clipboard-write"
                            ></iframe>
                        </div>
                    </div>
                </section>
            </main>
            <CursorEffect />
        </div>
    );
};

export default Page;
