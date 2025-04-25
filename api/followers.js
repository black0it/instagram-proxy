export default async function handler(req, res) {
  const user = req.query.user;
  
  if (!user) {
    return res.status(400).json({ error: "Missing 'user' parameter" });
  }

  try {
    const response = await fetch(`https://www.instagram.com/${user}/?__a=1&__d=dis`, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      }
    });
    const data = await response.json();

    const followers = data?.graphql?.user?.edge_followed_by?.count ?? -1;
    
    res.status(200).json({ followers: followers });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch followers' });
  }
}

