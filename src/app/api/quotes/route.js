// src/app/api/quotes/route.js

export async function POST(request) {
    try {
        const { depositMethod, settleMethod, depositAmount } = await request.json();

        if (!depositMethod || !settleMethod) {
            return new Response(
                JSON.stringify({ error: "Both depositMethod and settleMethod are required" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // Prepare payload
        const payload = {
            depositMethod,
            settleMethod,
            depositAmount: depositAmount || null, // Optional
            settleAmount: null, // Optional, but you can extend it
        };

        // Call external API
        const response = await fetch("https://bitcoinvn.io/api/quotes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: "d85cad14a32d9848b9bdf3811b68e1d7d43352ff8f48f5837207c774cffb0627",
            },
            body: JSON.stringify(payload),
        });

        // Handle API response
        const data = await response.json();
        if (!response.ok) {
            throw new Error(data?.error?.message || "Failed to create quote");
        }

        return new Response(JSON.stringify(data), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Error in /api/quotes:", error.message);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
