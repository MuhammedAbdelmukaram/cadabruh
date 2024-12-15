import React, { useEffect, useState } from "react";

const QuoteAndOrderDetails = ({ quote, order }) => {
    const [countdown, setCountdown] = useState(""); // State for countdown

    // Function to copy address to clipboard
    const handleCopyAddress = (address) => {
        navigator.clipboard.writeText(address);
        alert("Address copied to clipboard!");
    };

    // Function to format the ISO date into a human-readable format
    const formatDate = (isoDate) => {
        const options = {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true, // Use 12-hour clock
            timeZoneName: "short",
        };
        return new Intl.DateTimeFormat("en-US", options).format(new Date(isoDate));
    };


    // Countdown Timer Logic
    useEffect(() => {
        if (quote && quote.expiresAt) {
            const interval = setInterval(() => {
                const now = new Date();
                const expiresAt = new Date(quote.expiresAt);
                const timeLeft = expiresAt - now;

                if (timeLeft <= 0) {
                    clearInterval(interval);
                    setCountdown("Expired");
                } else {
                    const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
                    const seconds = Math.floor((timeLeft / 1000) % 60);
                    setCountdown(`${minutes}m ${seconds}s`);
                }
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [quote]);

    return (
        <>
            {quote && (
                <div className="quote-details">
                    <h3 className="quote-details__title">Quote Details</h3>
                    <p className="quote-details__text">Rate: {quote.rate}</p>
                    <p className="quote-details__text">
                        Expires At: {formatDate(quote.expiresAt)}{" "}
                        <span className="quote-details__countdown">({countdown})</span>
                    </p>

                </div>
            )}

            {order && (
                <div className="order-details">
                    <h3 className="order-details__title">Order Created</h3>
                    <p className="order-details__text">
                        Send {order.depositAmount} {order.depositMethod} to:
                    </p>
                    <strong
                        className="order-details__address"
                        onClick={() => handleCopyAddress(order.depositData.address)}
                    >
                        {order.depositData.address}
                    </strong>
                </div>
            )}
        </>
    );
};

export default QuoteAndOrderDetails;
