export async function GET(request) {
    const { pathname } = new URL(request.url);
    const segments = pathname.split("/");

    // Extract and normalize IDs to lowercase
    const depositMethodId = segments[segments.length - 2]?.toLowerCase();
    const settleMethodId = segments[segments.length - 1]?.toLowerCase();

    if (!depositMethodId || !settleMethodId) {
        return new Response(
            JSON.stringify({ error: "Both depositMethodId and settleMethodId are required" }),
            { status: 400, headers: { "Content-Type": "application/json" } }
        );
    }

    try {
        console.log(`Fetching pair details for: ${depositMethodId} -> ${settleMethodId}`);

        const response = await fetch(
            `https://bitcoinvn.io/api/pairs/${depositMethodId}/${settleMethodId}`,
            {
                headers: {
                    Authorization: "d85cad14a32d9848b9bdf3811b68e1d7d43352ff8f48f5837207c774cffb0627",
                    Accept: "application/json",
                },
            }
        );

        console.log(`API Response Status: ${response.status}`);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Error fetching pair: ${errorText}`);
            throw new Error(`External API Error: ${errorText}`);
        }

        const data = await response.json();
        console.log("Fetched Data:", data);

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { "Content-Type": "application/json" },
        });
    } catch (error) {
        console.error("Server Error:", error.message);
        return new Response(
            JSON.stringify({ error: error.message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
        );
    }
}
