import { useEffect, useState } from 'react';
import { fetchDonationCenters } from '../services/fetch-yelp';

export default function useDonationCenters() {
  const [donationCenters, setDonationCenters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchDonationCenters();
        console.log(data);
        setDonationCenters(data);
      } catch (e) {
        //eslint-disable-next-line no-console
        console.error(e);
      }
    };
    fetchData();
  }, []);
  return { donationCenters };
}
