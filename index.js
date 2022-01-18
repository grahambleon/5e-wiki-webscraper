const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  const args = process.argv.slice(2);
  const postCode = args[0] || 2000;
  const url = `http://dnd5e.wikidot.com/`;
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
  } catch (e) {
    console.error(`Error while fetching races from http://dnd5e.wikidot.com/`);
  }
})();