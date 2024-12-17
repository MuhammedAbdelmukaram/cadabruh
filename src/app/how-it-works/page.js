import React from "react";
import Header from "@/app/components/Header";
import CursorEffect from "@/app/components/CursorEffect";

const HowItWorksPage = () => {
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
            {/* Header Section */}
            <Header />

            <header style={{ textAlign: "center", marginBottom: "40px", marginTop: "70px" }}>
                <h1 style={{ fontSize: "2.5rem", margin: "10px 0", color: "#6c62f8" }}>How It Works</h1>
                <p style={{ fontSize: "1.2rem", color: "#E0E0E0", maxWidth: "700px", margin: "0 auto" }}>
                    You can swap crypto assets either in <strong>Standard</strong> mode or privately in{" "}
                    <strong>Private</strong> mode to send, swap, or bridge 4000 tokens with 8 million combinations of crypto
                    pairs.
                </p>
            </header>

            {/* Steps Section */}
            <main
                style={{
                    maxWidth: "800px",
                    margin: "0 auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
            >
                {/* Step 1 */}
                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "20px 25px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "transform 0.3s ease",
                    }}
                >
                    <h2 style={{ fontSize: "1.8rem", color: "#6c62f8", marginBottom: "10px" }}>Step 1</h2>
                    <p style={{ fontSize: "1rem", margin: "0", color: "#DDDDDD" }}>
                        Select the type of transaction you would like to use: either <strong>Standard</strong> or{" "}
                        <strong>Private</strong>.
                    </p>
                </div>

                {/* Step 2 */}
                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "20px 25px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "transform 0.3s ease",
                    }}
              >
                    <h2 style={{ fontSize: "1.8rem", color: "#6c62f8", marginBottom: "10px" }}>Step 2</h2>
                    <p style={{ fontSize: "1rem", color: "#DDDDDD", margin: "0" }}>
                        Select the type of token to send <strong>[From]</strong> and the type of receiving token{" "}
                        <strong>[To]</strong> for the transaction.
                    </p>
                    <p style={{ margin: "0", color: "#DDDDDD" }}>Enter the amount of tokens being sent.</p>
                    <p style={{ margin: "0", color: "#DDDDDD" }}>
                        Cadabruh will compare rates and optimize for the lowest cost route.
                    </p>
                    <p style={{ margin: "0", color: "#DDDDDD" }}>
                        Enter the receiving wallet address, ensuring the receiving address is on the same network as the
                        receiving token.
                    </p>
                    <p style={{ margin: "0", color: "#DDDDDD" }}>
                        Click <strong>"Find the best route"</strong>.
                    </p>
                </div>

                {/* Step 3 */}
                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "20px 25px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "transform 0.3s ease",
                    }}
                >
                    <h2 style={{ fontSize: "1.8rem", color: "#6c62f8", marginBottom: "10px" }}>Step 3</h2>
                    <p style={{ fontSize: "1rem", margin: "0", color: "#DDDDDD" }}>
                        Send the entered amount of cryptocurrency to the generated address.
                    </p>
                </div>

                {/* Step 4 */}
                <div
                    style={{
                        background: "rgba(255, 255, 255, 0.05)",
                        padding: "20px 25px",
                        borderRadius: "10px",
                        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        transition: "transform 0.3s ease",
                    }}
               >
                    <h2 style={{ fontSize: "1.8rem", color: "#6c62f8", marginBottom: "10px" }}>Step 4</h2>
                    <p style={{ fontSize: "1rem", margin: "0", color: "#DDDDDD" }}>
                        You can track the transaction completion on our <strong>progress page</strong>.
                    </p>
                    <p style={{ margin: "0", color: "#DDDDDD" }}>
                        On average, a <strong>standard swap</strong> takes less than <strong>5 minutes</strong>, while a{" "}
                        <strong>private swap</strong> takes <strong>20-40 minutes</strong> to complete, depending on the
                        selected tokens and routes.
                    </p>
                </div>
            </main>
            <CursorEffect/>
            {/* Footer */}
            <footer style={{ textAlign: "center", marginTop: "50px", fontSize: "0.9rem", color: "#AAAAAA" }}>
                <p>&copy; {new Date().getFullYear()} CadaBruh. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HowItWorksPage;
