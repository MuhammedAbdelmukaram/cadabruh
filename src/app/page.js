"use client";

import React, {useState, useEffect} from "react";
import CursorEffect from "@/app/components/CursorEffect";
import Header from "@/app/components/Header";
import styles from "./page.module.css";
import {motion} from "framer-motion";

// Loading screen component
const LoadingScreen = ({onDismiss, showButton}) => {
    return (
        <div className="loading-screen" onClick={onDismiss}>
            <div
                style={{
                    backgroundColor: "#fff",
                    height: "min-content",
                    marginTop: 20,
                    padding: "0px 10px",
                    borderRadius: 16,
                }}
            >
                <video
                    src="/cooker.mp4"
                    autoPlay
                    loop
                    muted
                    className="loading-video"
                ></video>
            </div>

            {/* Fade-in Button */}
            <div style={{height: 62, width: "100%", textAlign:"center"}}>
                {showButton && (

                    <motion.button
                        className="loading-button"
                        onClick={onDismiss}
                        initial={{opacity: 0}}      // Start invisible
                        animate={{opacity: 1}}      // Fade to visible
                        transition={{duration: 3}}  // Slow fade-in (3 seconds)
                    >
                        Enter the potion room
                    </motion.button>

                )}
            </div>
        </div>
    );
};

const Page = () => {
    const [loading, setLoading] = useState(true); // Loading screen state
    const [iframeLoaded, setIframeLoaded] = useState(false); // Iframe loaded state
    const [showButton, setShowButton] = useState(false); // Button state

    // Handle iframe load completion
    const handleIframeLoad = () => {
        setIframeLoaded(true); // Iframe has fully loaded
    };

    // Simulate additional 3-second delay for the button to appear
    useEffect(() => {
        const fallbackTimer = setTimeout(() => {
            setShowButton(true); // Fallback to show the button after 5 seconds
        }, 1000);

        if (iframeLoaded) {
            // Once iframe loads, wait an additional 3 seconds
            clearTimeout(fallbackTimer);
            const delayTimer = setTimeout(() => {
                setShowButton(true);
            }, 3000);
            return () => clearTimeout(delayTimer);
        }

        return () => clearTimeout(fallbackTimer); // Cleanup
    }, [iframeLoaded]);

    const handleDismissLoading = () => {
        setLoading(false); // Dismiss the loading screen
    };

    return (
        <div className="wrapper">
            {/* Show loading screen with button logic */}
            {loading && (
                <LoadingScreen
                    onDismiss={handleDismissLoading}
                    showButton={showButton}
                />
            )}

            {/* Main page content */}
            {!loading && (
                <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 2.3}}
                >
                    <Header/>
                    <main className="page">
                        <section className="page__hero hero">
                            <div className="hero__container">
                                <div className="hero__top">
                                    <h1 className="hero__title">Transact Freely</h1>
                                    <div className="hero__text">
                                        <p>
                                            Cadabruh, making your on-chain swaps quick and
                                            anonymous
                                        </p>
                                    </div>
                                </div>
                                {/* Responsive iframe wrapper */}
                                <div className={styles.iframeWrapper}>
                                    <iframe
                                        src="https://houdiniswap.com/?tokenIn=ETH&tokenOut=SOL&widgetMode=true"
                                        className={styles.iframe}
                                    ></iframe>
                                </div>

                                <div>

                                    <p style={{color:"#fff", marginTop:20, fontSize:12, textAlign:"center"}}>
                                        Pepe took a break from memes and spent a term at Hogwarts. Now he’s back with a cauldron full of <a href="https://cadabruh.gitbook.io/cadabruh-docs" target="_blank" style={{fontWeight:"bold"}}> blockchain privacy magic.</a>
                                    </p>
                                </div>
                            </div>
                        </section>
                    </main>
                </motion.div>
            )}



        </div>
    );
};

export default Page;
