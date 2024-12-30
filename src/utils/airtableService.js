import axios from "axios";

// const response = await axios.get(
//   `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Executive`,
//   {
//     headers: {
//       Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
//     },
//   }
// );

// Function to fetch data from Airtable
export const fetchAirtableData = async () => {
  try {
    const response = await axios.get(
      `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Executive`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
        },
        params: {
          sort: [
            {
              field: "Index",
              direction: "asc",
            },
          ],
        },
      }
    );
    return response.data.records; // Return the records array
  } catch (error) {
    console.error("Error fetching Airtable data:", error);
    throw error; // Re-throw the error for the calling component to handle
  }
};
