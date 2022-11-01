// this is where I make the call to the api handler

export async function fetchDonationCenters() {
  const resp = await fetch(`./netlify/functions/fetch-yelp`, {
    headers: { Accept: 'application/json' },
  });
  const data = await resp.json();
  return data;
}
