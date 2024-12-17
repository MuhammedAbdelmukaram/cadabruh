"use client";

import React, { useState, useEffect } from "react";
import CursorEffect from "@/app/components/CursorEffect";
import Header from "@/app/components/Header";
import styles from "./page.module.css";
import { motion, AnimatePresence } from "framer-motion";

// Loading screen component
const LoadingScreen = ({ onDismiss, showButton }) => {
    return (
        <motion.div
            initial={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }} // Exit animation: fade-out and scale-up
            transition={{ duration: 1.5 }} // Animation duration
            onClick={onDismiss}
            style={{
                backgroundColor: "#0a0a12",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                cursor:"pointer",
                position:"relative",
            }}
        >
            <div
                className="background-div"
                >

            </div>
            <div
                style={{
                    backgroundColor: "transparent",
                    height: "min-content",
                    marginTop: 20,
                    padding: "0px 10px",
                    borderRadius: 16,
                    zIndex:3
                }}
            >
                <video
                    src="/Mp44.mp4"
                    autoPlay
                    loop
                    muted
                    className="loading-video"
                ></video>
            </div>

            {/* Fade-in Button */}
            <div style={{height: 62, width: "100%", textAlign: "center"}}>
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
            <CursorEffect />
        </motion.div>
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
            setShowButton(true); // Show the button after fallback delay
        }, 1000);

        if (iframeLoaded) {
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
            {/* AnimatePresence for exit animations */}
            <AnimatePresence>
                {loading && (
                    <LoadingScreen
                        onDismiss={handleDismissLoading}
                        showButton={showButton}
                    />
                )}
            </AnimatePresence>

            {/* Main page content */}
            {!loading && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2.3 }}
                >
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
                                        src="https://houdiniswap.com/?tokenIn=ETH&tokenOut=SOL&widgetMode=true"
                                        className={styles.iframe}
                                        onLoad={handleIframeLoad}
                                    ></iframe>
                                </div>
                                <p
                                    style={{
                                        color: "#fff",
                                        marginTop: 20,
                                        fontSize: 12,
                                        textAlign: "center",
                                    }}
                                >
                                    Pepe took a break from memes and spent a term at Hogwarts. Now
                                    he’s back with a cauldron full of{" "}
                                    <a
                                        href="https://cadabruh.gitbook.io/cadabruh-docs"
                                        target="_blank"
                                        style={{ fontWeight: "bold" }}
                                    >
                                        blockchain privacy magic.
                                    </a>
                                </p>
                            </div>
                        </section>
                    </main>
                    <CursorEffect />
                </motion.div>
            )}
        </div>
    );
};

export default Page;
