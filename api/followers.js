export default async function handler(req, res) {
  const user = req.query.user;
  if (!user) {
    return res.status(400).json({ error: "Missing 'user' parameter" });
  }

  try {
    const response = await fetch(`https://insta-followers-counter.glitch.me/followers/${user}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch followers (proxy2)' });
  }
}
