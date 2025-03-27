export async function GET() {
  console.log("Beehiiv API Key:", process.env.BEEHIIV_API_KEY);

  try {
    const response = await fetch(
      "https://api.beehiiv.com/v2/publications/pub_09245080-2e78-45d5-9b68-49637c631499/posts",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching Beehiiv posts:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
