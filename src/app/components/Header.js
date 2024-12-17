"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="header__container">
                {/* Logo */}
                <Link href="/" aria-label="Go to main section" className="header__logo">
                    <Image src="/logo2.png" alt="Website logo" width={150} height={60} />
                </Link>

                {/* Hamburger Button */}
                <button
                    className="header__menu-toggle"
                    aria-label="Toggle navigation menu"
                    onClick={toggleMenu}
                >
                    <div className="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>

                {/* Navigation Menu */}
                <nav className={`menu__body ${isMenuOpen ? "menu__body--open" : ""}`}>
                    <ul className="menu__list">
                        <li className="menu__item">
                            <Link href="how-it-works" className="menu__link">
                                How it Works
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link href="faq" className="menu__link">
                                FAQs
                            </Link>
                        </li>
                        <li className="menu__item menu__item--social">
                            <Link
                                href="https://t.me/cadabruhswap"
                                className="menu__link"
                                aria-label="Telegram Link"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="28"
                                    height="23"
                                    viewBox="0 0 28 23"
                                    fill="none"
                                >
                                    <path d="M6.9978 13.348L0.800461 11.3507C0.606734 11.2853 0.446204 11.1469 0.353098 10.9648C0.259993 10.7828 0.241679 10.5716 0.302061 10.3763C0.350595 10.2344 0.445795 10.1243 0.750061 9.91894C2.11833 8.97628 26.1237 0.412011 26.1237 0.412011C26.4783 0.285078 26.8461 0.270145 27.2007 0.333611C27.4079 0.395211 27.5535 0.552011 27.6021 0.757345C27.6487 0.930945 27.6655 1.11948 27.6487 1.29121C27.6487 1.44801 27.6338 1.58988 27.617 1.82694C27.4733 4.16774 23.1053 21.6173 23.1053 21.6173C23.1053 21.6173 22.8495 22.6384 21.9013 22.6701C21.4377 22.6844 20.9874 22.5146 20.6487 22.1979C18.8007 20.6261 12.4429 16.3981 11.0466 15.4555C10.9813 15.4069 10.9346 15.3435 10.9346 15.2669C10.9178 15.1717 11.0149 15.0467 11.0149 15.0467C11.0149 15.0467 22.0935 5.28401 22.3829 4.26294" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
