const fetch = require('node-fetch');
require('dotenv').config({ path: `.env.development.local` });

exports.handler = async () => {
  // will pass up state here for latitude and longitude grabbed from browser. Will use event

  try {
    const resp = await fetch(
      `https://api.yelp.com/v3/businesses/search?categories=donationcenter`,
      {
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
        },
      }
    );
    const donationCenters = await resp.json();
    return {
      statusCode: 200,
      body: JSON.stringify(donationCenters.businesses),
    };
  } catch (e) {
    //eslint-disable-next-line no-console
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch Yelp Data' }),
    };
  }
};
