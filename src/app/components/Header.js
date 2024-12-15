import Image from 'next/image';
import Link from 'next/link';

const Header = () => (
    <header className="header">
        <div className="header__container">
            <Link href="/" aria-label="Go to main section" className="header__logo">
                <Image src="/logo.svg" alt="Website logo" width={100} height={40} />
            </Link>
            <nav className="menu__body">
                <form action="#" className="menu__form">
                    <div className="menu__input-wrapper">
                        <input type="text" name="search" placeholder="Search a TX" className="menu__input" />
                        {/* Search Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                            <g opacity="0.5">
                                <path
                                    d="M13.0672 6.52199C13.0672 7.84799 12.6372 9.07199 11.9122 10.065L15.5682 13.724C15.7279 13.9001 15.8137 14.1309 15.8079 14.3686C15.8021 14.6063 15.7051 14.8327 15.537 15.0008C15.3689 15.1689 15.1425 15.2659 14.9048 15.2717C14.6671 15.2776 14.4363 15.1917 14.2602 15.032L10.6042 11.374C9.5762 12.1269 8.33437 12.5313 7.06018 12.528C6.2715 12.528 5.49056 12.3726 4.76193 12.0708C4.03331 11.769 3.37127 11.3265 2.81365 10.7688C2.25602 10.2111 1.81371 9.54899 1.51199 8.82031C1.21027 8.09164 1.05504 7.31066 1.05518 6.52199C1.05504 5.73332 1.21027 4.95235 1.51199 4.22367C1.81371 3.49499 2.25602 2.83289 2.81365 2.27517C3.37127 1.71745 4.03331 1.27503 4.76193 0.97319C5.49056 0.671348 6.2715 0.515991 7.06018 0.515991C7.84893 0.51586 8.62999 0.67112 9.35873 0.972903C10.0875 1.27469 10.7496 1.71708 11.3074 2.27481C11.8651 2.83255 12.3075 3.4947 12.6093 4.22344C12.911 4.95218 13.0663 5.73324 13.0662 6.52199M7.06018 10.681C8.16308 10.681 9.22081 10.2429 10.0007 9.46299C10.7805 8.68312 11.2187 7.62539 11.2187 6.52249C11.2187 5.41959 10.7805 4.36186 10.0007 3.58199C9.22081 2.80212 8.16308 2.36399 7.06018 2.36399C5.95727 2.36399 4.89954 2.80212 4.11967 3.58199C3.3398 4.36186 2.90168 5.41959 2.90168 6.52249C2.90168 7.62539 3.3398 8.68312 4.11967 9.46299C4.89954 10.2429 5.95727 10.681 7.06018 10.681Z"
                                    fill="#D1D5DB"
                                />
                            </g>
                        </svg>
                    </div>
                </form>
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
                    {/* Social Media Icons */}
                    <li className="menu__item menu__item--social">
                        {/*<Link href="#" className="menu__link" aria-label="Social Icon 1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 27 25"
                                 fill="none">
                                <path
                                    d="M3.962 2.152H7.466L22.952 22.848H19.448L3.962 2.152ZM22.824 0.5L14.782 9.178L8.302 0.5H0.656004L10.55 13.734L0.604004 24.5H2.854L11.586 15.078L18.63 24.5H26.256L15.798 10.52L25.076 0.5H22.824Z"/>
                            </svg>
                        </Link>*/}
                        <Link href="https://t.me/cadabruhswap" className="menu__link" aria-label="Social Icon 2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="23" viewBox="0 0 28 23" fill="none">
                                <path d="M6.9978 13.348L0.800461 11.3507C0.606734 11.2853 0.446204 11.1469 0.353098 10.9648C0.259993 10.7828 0.241679 10.5716 0.302061 10.3763C0.350595 10.2344 0.445795 10.1243 0.750061 9.91894C2.11833 8.97628 26.1237 0.412011 26.1237 0.412011C26.4783 0.285078 26.8461 0.270145 27.2007 0.333611C27.4079 0.395211 27.5535 0.552011 27.6021 0.757345C27.6487 0.930945 27.6655 1.11948 27.6487 1.29121C27.6487 1.44801 27.6338 1.58988 27.617 1.82694C27.4733 4.16774 23.1053 21.6173 23.1053 21.6173C23.1053 21.6173 22.8495 22.6384 21.9013 22.6701C21.4377 22.6844 20.9874 22.5146 20.6487 22.1979C18.8007 20.6261 12.4429 16.3981 11.0466 15.4555C10.9813 15.4069 10.9346 15.3435 10.9346 15.2669C10.9178 15.1717 11.0149 15.0467 11.0149 15.0467C11.0149 15.0467 22.0935 5.28401 22.3829 4.26294" />
                            </svg>
                        </Link>

                        <Link
                            href="https://docs.cadabruh.com"
                            className="menu__link"
                            aria-label="GitBook Documentation"
                        >
                            <Image
                                src="/gitbook.svg" // Path to your image in the public folder
                                alt="GitBook Logo"
                                width={28} // Adjust size as needed
                                height={28}
                                style={{ marginTop: "2px" }} // Optional vertical alignment tweak
                            />
                        </Link>


                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;
