const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/num', async (req, res) => {
  const url = req.query.url;

  if (!url || !Array.isArray(url)) {
    return res.status(400).json({ error: 'Invalid URL' });
  }

  const numPromises = url.map(async (url) => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      if (data && data.num && Array.isArray(data.num)) {
        return data.num;
      } else {
        return [];
      }
    } catch (error) {
      console.error(`Error fetching data from ${url}: ${error.message}`);
      return [];
    }
  });

  try {
    const numArrays = await Promise.all(numPromises);
    const mergednum = numArrays.reduce((acc, num) => acc.concat(num), []);
    const uniqueSortednum = [...new Set(mergednum)].sort((a, b) => a - b);

    res.json({ num: uniqueSortednum });
  } catch (error) {
    console.error('Error processing requests:', error.message);
    res.status(500).json({ error: ' server error' });
  }
});

app.listen(port, () => {
  console.log(` running on port ${port}`);
});