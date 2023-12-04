// export default (req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-type', 'application/json');
//   res.send(JSON.stringify({ result: ['no results'] }));
// };
import axios from 'axios';

export default async function newsaPi(req, res) {
  try {
    // const { city } = req.body;
    const API_key = '13aef48ed924432f8db875161defe7cf';
    const apiUrl = `https://newsapi.org/v2/everything?q=Finland&from=2023-12-03&apiKey=${API_key}`;

    const response = await axios.get(apiUrl);
    const newsData = response.data;

    return res.status(200).json(newsData);
  } catch (error) {
    console.error('Error fetching news:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
