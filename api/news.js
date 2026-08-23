// Vercel Serverless Function
// This runs server-side, so NewsAPI's free-tier browser restriction (426 Upgrade Required)
// does not apply here. The API key also stays hidden from the client.

export default async function handler(req, res) {
  const { category = 'general', page = 1, pageSize = 9 } = req.query;

  const apiKey = process.env.NEWS_API_KEY; // server-only, no REACT_APP_ prefix needed/wanted here

  if (!apiKey) {
    return res.status(500).json({ error: 'Server misconfiguration: missing API key' });
  }

  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(
    category
  )}&language=en&sortBy=publishedAt&apiKey=${apiKey}&pageSize=${pageSize}&page=${page}`;

  try {
    const apiRes = await fetch(url);
    const data = await apiRes.json();

    if (!apiRes.ok) {
      return res.status(apiRes.status).json(data);
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch news', details: error.message });
  }
}