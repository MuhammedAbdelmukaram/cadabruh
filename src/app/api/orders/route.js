export async function POST(request) {
    try {
        const body = await request.json();

        const { quote, settleData, depositRefundData, webhookUrl, referrer } = body;

        // Validate required fields
        if (!quote || !settleData?.address || !depositRefundData?.address) {
            return new Response(
                JSON.stringify({ error: "Missing required fields: quote, settleData, or depositRefundData" }),
                { status: 400, headers: { "Content-Type": "application/json" } }
            );
        }

        // External API call to create an order
        const response = await fetch("https://bitcoinvn.io/api/orders", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "d85cad14a32d9848b9bdf3811b68e1d7d43352ff8f48f5837207c774cffb0627", // Replace with your API key
            },
            body: JSON.stringify({
                quote,
                settleData: { ...settleData },
                depositRefundData: { ...depositRefundData },
                webhookUrl: webhookUrl || "", // Optional field
                referrer: referrer || "", // Optional field
            }),
        });

        if (!response.ok) {
            const errorData = await response.text();
            console.error("Error creating order:", errorData);
            throw new Error(`Failed to create order: ${errorData}`);
        }

        const data = await response.json();

        return new Response(JSON.stringify(data), {
            status: 201,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Order API Error:", error.message);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
