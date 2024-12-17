import React from "react";
import Header from "@/app/components/Header";
import CursorEffect from "@/app/components/CursorEffect";

const FAQPage = () => {
    return (
        <div
            className="wrapper"
            style={{
                fontFamily: "Poppins, Arial, sans-serif",
                color: "#FFFFFF",
                lineHeight: "1.6",
                padding: "20px",
                background: "url(/main-bg.png)",
                minHeight: "100vh",
            }}
        >
            {/* Header */}
            <Header />

            <header style={{ textAlign: "center", marginBottom: "40px", marginTop: "100px" }}>
                <h1 style={{ fontSize: "2.5rem", margin: "10px 0", color: "#6c62f8" }}>
                    Frequently Asked Questions
                </h1>
                <p style={{ fontSize: "1.2rem", color: "#E0E0E0" }}>
                    Find answers to the most commonly asked questions about Cadabruh.
                </p>
            </header>

            {/* FAQ Section */}
            <main
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                {/* FAQ Item */}
                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "20px 25px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "transform 0.3s ease",
                        cursor: "pointer",
                    }}
                >
                    <h2 style={{ fontSize: "1.5rem", color: "#6c62f8", marginBottom: "10px" }}>
                        ▪️ How Does Cadabruh Work?
                    </h2>
                    <p style={{ fontSize: "1rem", margin: "0", color: "#DDDDDD" }}>
                        Cadabruh allows you to send, swap, or bridge over 4000 tokens seamlessly. You can choose between{" "}
                        <strong style={{ color: "#16e0ee" }}>Standard</strong> mode for regular swaps or{" "}
                        <strong style={{ color: "#16e0ee" }}>Private</strong> mode for more anonymous transactions. Cadabruh compares rates and optimizes the transaction route for the lowest fees and fastest speed.
                    </p>
                </div>

                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "20px 25px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "transform 0.3s ease",
                        cursor: "pointer",
                    }}
                >
                    <h2 style={{ fontSize: "1.5rem", color: "#6c62f8", marginBottom: "10px" }}>
                        ▪️ Why Trust Us?
                    </h2>
                    <p style={{ fontSize: "1rem", margin: "0", color: "#DDDDDD" }}>
                        Cadabruh is built with security and transparency as core principles. We ensure all routes are fully optimized and transactions are handled securely. Additionally, private transactions ensure confidentiality, with no user data stored.
                    </p>
                </div>

                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "20px 25px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "transform 0.3s ease",
                        cursor: "pointer",
                    }}
                   >
                    <h2 style={{ fontSize: "1.5rem", color: "#6c62f8", marginBottom: "10px" }}>
                        ▪️ Do I Have to Connect My Wallet?
                    </h2>
                    <p style={{ fontSize: "1rem", margin: "0", color: "#DDDDDD" }}>
                        No, you do not have to connect your wallet. Cadabruh allows for{" "}
                        <strong style={{ color: "#16e0ee" }}>no-wallet connect</strong> transactions, enabling you to send funds manually to a generated address. For users who prefer convenience, connecting a wallet streamlines the process.
                    </p>
                </div>
            </main>
            <CursorEffect/>
            {/* Footer */}
            <footer style={{ textAlign: "center", marginTop: "50px", fontSize: "0.9rem", color: "#AAAAAA" }}>
                <p>&copy; {new Date().getFullYear()} Cadabruh. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default FAQPage;
