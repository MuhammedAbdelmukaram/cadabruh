import React from 'react';
import CursorEffect from "@/app/components/CursorEffect";
import Header from "@/app/components/Header";

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
                        <iframe
                            src="https://houdiniswap.com/?partnerId=2&widgetMode=true"
                            style={{
                                width: '900px',
                                height: '800px',
                                marginLeft: '20px',
                                borderRadius: '30px',
                                border: 'none' // Optional: to remove iframe border
                            }}
                            allow="clipboard-write"
                        ></iframe>
                    </div>
                </section>
            </main>
            <CursorEffect/>
        </div>
    );
};

export default Page;
