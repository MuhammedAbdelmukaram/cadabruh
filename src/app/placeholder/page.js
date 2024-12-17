"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import QuoteAndOrderDetails from "@/app/components/QuoteAndOrderDetails";
import CursorEffect from "@/app/components/CursorEffect";


const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="spinner"></div>
            <p className="loading-text">Cadabruh is cooking.....</p>
        </div>
    );
};
const FormPage = () => {
    const [assets, setAssets] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [selectedFrom, setSelectedFrom] = useState("");
    const [selectedTo, setSelectedTo] = useState("");
    const [amount, setAmount] = useState(""); // NEW: State for Amount
    const [pairInfo, setPairInfo] = useState(null);
    const [pairError, setPairError] = useState("");
    const [receivingWallet, setReceivingWallet] = useState("");
    const [quote, setQuote] = useState(null);
    const [order, setOrder] = useState(null);

    // Auto-calculate conversion
    const conversion = amount && pairInfo?.rate ? (parseFloat(amount) * pairInfo.rate).toFixed(6) : null;

    // Fetch assets
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/proxy");
                if (!response.ok) throw new Error("Failed to fetch assets");
                const data = await response.json();
                setAssets(data.assets);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    // Fetch pair information
    useEffect(() => {
        const fetchPairInfo = async () => {
            if (!selectedFrom || !selectedTo) return;

            try {
                const response = await fetch(
                    `/api/pairs/${selectedFrom.toLowerCase()}/${selectedTo.toLowerCase()}`
                );

                if (!response.ok) {
                    const errorData = await response.json();
                    // Extract "message" from the response
                    const rawError = errorData.error; // e.g., "External API Error: {...}"
                    const messageMatch = rawError.match(/"message":"(.*?)"/); // Extract "message"
                    const errorMessage = messageMatch ? messageMatch[1] : "An unknown error occurred.";
                    throw new Error(errorMessage);
                }

                const data = await response.json();
                setPairInfo(data);
                setPairError(""); // Clear any previous error
            } catch (err) {
                setPairInfo(null);
                setPairError(err.message); // Set the extracted error message
            }
        };

        fetchPairInfo();
    }, [selectedFrom, selectedTo]);




    // Combined Generate Quote and Create Order
    const handleGenerateQuoteAndOrder = async () => {
        try {
            if (!amount || isNaN(amount) || amount <= 0) {
                throw new Error("Please enter a valid deposit amount.");
            }

            console.log("Generating quote...");
            const quoteResponse = await fetch("/api/quotes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    depositMethod: selectedFrom,
                    settleMethod: selectedTo,
                    depositAmount: parseFloat(amount),
                }),
            });

            if (!quoteResponse.ok) throw new Error("Failed to generate quote");
            const quoteData = await quoteResponse.json();
            setQuote(quoteData);

            const orderPayload = {
                quote: quoteData.id,
                settleData: { address: receivingWallet },
                depositRefundData: { address: receivingWallet },
                webhookUrl: "https://example.com/webhook",
                referrer: "QO264G",
            };

            const orderResponse = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderPayload),
            });

            if (!orderResponse.ok) throw new Error("Failed to create order");
            const orderData = await orderResponse.json();
            setOrder(orderData);
        } catch (err) {
            console.error(err.message);
        }
    };

    // Dropdown rendering
    const renderDropdown = (selectedValue, setSelectedValue) => (
        <div style={{ position: "relative", maxWidth: "100%" }}>
            <select
                style={{
                    width: "100%",
                    padding: "12px 16px",
                    fontSize: "1rem",
                    fontFamily: "'Outfit', sans-serif",
                    color: "#ffffff",
                    background: "linear-gradient(135deg, #2e2a4e, #1e1b3e)",
                    border: "2px solid #6c62f8",
                    borderRadius: "8px",
                    appearance: "none",
                    outline: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.3)",
                    transition: "all 0.3s ease",
                }}
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value.toLowerCase())}
            >
                <option value="" disabled>Select Asset</option>
                {Object.entries(assets).map(([key, asset]) => (
                    <option key={key} value={key.toLowerCase()} style={{ color: "#000" }}>
                        {asset.name} ({asset.id})
                    </option>
                ))}
            </select>
        </div>
    );

    return (
        <div className="wrapper">
            {loading && <LoadingScreen />}
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

                        {loading ? (
                            <p>Loading assets...</p>
                        ) : error ? (
                            <p className="error">{error}</p>
                        ) : (
                            <form className="hero__form form">
                                <div className="form__wrapper">
                                    {/* From Dropdown */}
                                    <div className="form__input-wrapper">
                                        <div className="form__input-label">
                                            <span className="form__input-label">From</span>
                                        </div>

                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <input
                                                type="number"
                                                placeholder="Enter amount"
                                                value={amount}
                                                onChange={(e) => setAmount(e.target.value)}
                                                className="form__input"
                                            />

                                            {renderDropdown(selectedFrom, setSelectedFrom)}
                                        </div>
                                    </div>

                                    {/* To Dropdown */}
                                    <div className="form__input-wrapper">
                                        <div className="form__input-label">
                                            <span className="form__input-label">To</span>
                                        </div>

                                        <div style={{ display: "flex", gap: "10px" }}>
                                            <input
                                                type="number"
                                                placeholder="You get"
                                                value={conversion || ""}
                                                className="form__input"
                                                readOnly
                                            />


                                            {renderDropdown(selectedTo, setSelectedTo)}
                                        </div>
                                    </div>



                                    {/* Receiving Wallet */}
                                    <div className="form__input-wrapper form__input-wrapper--last">
                                        <div className="form__input-label">
                                            <span className="form__input-label">Receiving Wallet Address</span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Enter receiving wallet address"
                                            value={receivingWallet}
                                            onChange={(e) => setReceivingWallet(e.target.value)}
                                            className="form__input"
                                        />
                                    </div>
                                    {pairError && <p style={{color:"#b61414", textAlign:"center", marginBottom:10}}>Pair {pairError}</p>}

                                    <button
                                        className="form__button"
                                        onClick={handleGenerateQuoteAndOrder}
                                        type="button"
                                        disabled={!selectedFrom || !selectedTo || !receivingWallet || !amount}
                                    >
                                        <span>Find the best route</span>
                                    </button>

                                </div>






                            </form>
                        )}
                        <QuoteAndOrderDetails quote={quote} order={order} />


                    </div>
                </section>
            </main>
            <CursorEffect />
        </div>
    );
};

export default FormPage;
