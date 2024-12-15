export async function GET(request) {
    try {
        const response = await fetch("https://bitcoinvn.io/api/info", {
            headers: {
                "Authorization": "d85cad14a32d9848b9bdf3811b68e1d7d43352ff8f48f5837207c774cffb0627",
            },
        });

        if (!response.ok) {
            // Handle non-200 responses
            return Response.json(
                { error: "Failed to fetch data from external API" },
                { status: response.status }
            );
        }

        const data = await response.json();
        return Response.json(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        return Response.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
