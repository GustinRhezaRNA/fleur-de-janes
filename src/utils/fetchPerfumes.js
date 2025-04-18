export async function fetchPerfumes({ brand, accords }) {
  const url = new URL('https://perfumero1.p.rapidapi.com/search');
  if (brand) url.searchParams.append('brand', brand);
  if (accords) url.searchParams.append('accords', accords);

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'perfumero1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) throw new Error('Failed to fetch perfumes');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching perfumes:', error);
    return null;
  }
}
