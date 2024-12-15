import "../globals.css"; // Link your external CSS file

const FormPage = () => (
    <main className="page">
        <section className="page__hero">
            <div className="hero__container">
                {/* Hero Section */}
                <div className="hero__top">
                    <h1 className="hero__title">Transact Freely</h1>
                    <div className="hero__text">
                        <p>Cadabruh, making your on-chain swaps quick and anonymous</p>
                        <p>Send or Bridge with 4000+ tokens across chains</p>
                    </div>
                </div>

                {/* Form Section */}
                <form action="#" className="hero__form">
                    <div className="form__wrapper">
                        {/* Settings Button */}
                        <button type="button" className="form__settings">
                            {/* Inline SVG */}
                            <svg width="26" height="26" viewBox="0 0 26 26">
                                <path
                                    d="M10.1756 20.9853L10.8093 22.4088C..."
                                    stroke="white"
                                    strokeWidth="2.4375"
                                />
                            </svg>
                        </button>

                        {/* Input Fields */}
                        <FormInput
                            label="From"
                            icon="/img/eth-icon.png"
                            network="Ethereum Mainnet"
                            currency="ETH"
                            placeholder="0"
                        />
                        <FormInput
                            label="To"
                            icon="/img/solana-icon.png"
                            network="Solana"
                            currency="SOL"
                            placeholder="0"
                            isReverse
                        />

                        {/* Receiving Address */}
                        <div className="form__input-wrapper form__input-wrapper--last">
                            <div className="form__input-label">
                                <span>Receiving wallet address:</span>
                            </div>
                            <div className="form__input-box">
                                <input type="text" placeholder="Enter wallet address" className="form__input" />
                            </div>
                        </div>

                        {/* Buttons */}
                        <button type="button" className="form__add">
                            <div>+</div>
                            <span>Add Swap</span>
                        </button>
                        <button type="submit" className="form__button">
                            <span>Find the best route</span>
                        </button>
                    </div>
                </form>
            </div>
        </section>
    </main>
);

const FormInput = ({ label, icon, network, currency, placeholder, isReverse = false }) => (
    <div className="form__input-wrapper">
        <div className="form__input-label">
            <div className="form__input-label-wrp">
                <span>{label}</span>
                <img src={icon} alt={`${label} icon`} className="form__icon" />
                <span>{network}</span>
            </div>
            {isReverse && (
                <button type="button" className="form__reverse">
                    {/* Inline SVG */}
                    <svg width="20" height="20" viewBox="0 0 20 20">
                        <path d="M6.70591 17.568V2.43298L2.03491 7.10398" stroke="white" strokeWidth="3" />
                    </svg>
                </button>
            )}
        </div>
        <div className="form__input-box">
            <div className="form__input-container">
                <input type="number" placeholder={placeholder} className="form__input" />
                <div className="form__input-right">
                    <span>{currency}</span>
                </div>
            </div>
        </div>
    </div>
);



export default FormPage;
