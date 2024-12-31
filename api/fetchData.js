// /api/fetchData.js
// import fetch from "node-fetch";

export default async function handler(req, res) {
  // Extract query parameters from the request
  const { tableName } = req.query;

  // Securely access the Airtable API key from environment variables
  const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
  const BASE_ID = process.env.AIRTABLE_BASE_ID; // Airtable base ID

  //   if (!AIRTABLE_API_KEY || !BASE_ID) {
  //     return res.status(500).json({ error: "Missing environment variables" });
  //   }

  // Airtable API URL
  const AIRTABLE_URL = `https://api.airtable.com/v0/${BASE_ID}/Executive`;

  const params = new URLSearchParams({
    "sort[0][field]": "Index",
    "sort[0][direction]": "asc",
  });

  try {
    // Make a request to Airtable
    const response = await fetch(`${AIRTABLE_URL}?${params.toString()}`, {
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
      },
    });

    // Check for errors
    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: "Failed to fetch Airtable data" });
    }

    // Parse and send the response
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({
      error: "An error occurred while fetching data",
      details: error.message,
    });
  }
}
