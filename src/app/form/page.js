"use client";
import { useState, useEffect } from "react";
import Header from "@/app/components/Header";

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
                if (!response.ok) throw new Error("Failed to fetch pair details");
                const data = await response.json();
                setPairInfo(data);
                setPairError("");
            } catch (err) {
                setPairInfo(null);
                setPairError(err.message);
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
                    depositAmount: parseFloat(amount), // NEW: Use user input
                }),
            });

            if (!quoteResponse.ok) {
                const errorText = await quoteResponse.text();
                console.error("Quote API Error Response:", errorText);
                throw new Error("Failed to generate quote");
            }

            const quoteData = await quoteResponse.json();
            console.log("Generated Quote Response:", quoteData);

            if (!quoteData.id) {
                console.error("Missing Quote ID in Response:", quoteData);
                throw new Error("Quote ID is missing or invalid");
            }

            setQuote(quoteData);

            const orderPayload = {
                quote: quoteData.id,
                settleData: { address: receivingWallet },
                depositRefundData: { address: receivingWallet },
                webhookUrl: "https://example.com/webhook",
                referrer: "QO264G",
            };

            console.log("Creating order with payload:", JSON.stringify(orderPayload, null, 2));

            const orderResponse = await fetch("/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderPayload),
            });

            if (!orderResponse.ok) {
                const errorText = await orderResponse.text();
                console.error("Order API Error Response:", errorText);
                throw new Error("Failed to create order");
            }

            const orderData = await orderResponse.json();
            console.log("Order Created Successfully:", orderData);

            setOrder(orderData);
        } catch (err) {
            console.error("Error in Quote or Order:", err.message);
        }
    };

    // Dropdown rendering
    const renderDropdown = (selectedValue, setSelectedValue) => (
        <select
            className="dropdown"
            value={selectedValue}
            onChange={(e) => setSelectedValue(e.target.value.toLowerCase())}
        >
            <option value="" disabled>Select Asset</option>
            {Object.entries(assets).map(([key, asset]) => (
                <option key={key} value={key.toLowerCase()}>
                    {asset.name} ({asset.id})
                </option>
            ))}
        </select>
    );

    return (
        <div className="wrapper">
            <Header />
            <main className="page">
                <section className="page__hero hero">
                    <div className="hero__container">
                        <h1 className="hero__title">Transact Freely</h1>
                        <p>Cadabruh, making your on-chain swaps quick and anonymous</p>

                        {loading ? (
                            <p>Loading assets...</p>
                        ) : error ? (
                            <p style={{ color: "red" }}>Error: {error}</p>
                        ) : (
                            <>
                                <div className="form__wrapper">
                                    <div className="form__input">
                                        <label>From</label>
                                        {renderDropdown(selectedFrom, setSelectedFrom)}
                                    </div>
                                    <div className="form__input">
                                        <label>To</label>
                                        {renderDropdown(selectedTo, setSelectedTo)}
                                    </div>
                                    <div className="form__input">
                                        <label>Amount</label>
                                        <input
                                            type="number"
                                            placeholder="Enter amount"
                                            value={amount}
                                            onChange={(e) => setAmount(e.target.value)}
                                            className="dropdown"
                                        />
                                    </div>
                                    <div className="form__input">
                                        <label>Receiving Wallet Address</label>
                                        <input
                                            type="text"
                                            placeholder="Enter receiving wallet address"
                                            value={receivingWallet}
                                            onChange={(e) => setReceivingWallet(e.target.value)}
                                            className="dropdown"
                                        />
                                    </div>
                                </div>

                                {pairError ? (
                                    <p style={{ color: "red" }}>Error: {pairError}</p>
                                ) : (
                                    pairInfo && (
                                        <div className="pair-details">
                                            <h3>Pair Information</h3>
                                            <p>Rate: <strong>{pairInfo.rate}</strong></p>
                                            <p>Min: <strong>{pairInfo.min}</strong></p>
                                            <p>Max: <strong>{pairInfo.max}</strong></p>
                                        </div>
                                    )
                                )}

                                <button
                                    className="action-button"
                                    onClick={handleGenerateQuoteAndOrder}
                                    disabled={!selectedFrom || !selectedTo || !receivingWallet || !amount}
                                >
                                    Generate Quote & Create Order
                                </button>

                                {quote && (
                                    <div className="quote-details">
                                        <h3>Quote Details</h3>
                                        <p>Rate: {quote.rate}</p>
                                        <p>Expires At: {quote.expiresAt}</p>
                                    </div>
                                )}

                                {order && (
                                    <div className="order-details">
                                        <h3>Order Created</h3>
                                        <p>Send {order.depositAmount} {order.depositMethod} to:</p>
                                        <strong>{order.depositData.address}</strong>
                                    </div>
                                )}
                            </>
                        )}
                    </div>
                </section>
            </main>
        </div>
    );
};

export default FormPage;
