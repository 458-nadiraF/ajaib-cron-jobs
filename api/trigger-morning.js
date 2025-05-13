export default async function handler(req, res) {
  const urls = [
    'https://puppeteer-render-zx37.onrender.com/',
    'https://ajaib-automation.onrender.com/'
  ];

  // Trigger all APIs in parallel, but don't wait for each to finish
  const promises = urls.map(url =>
    fetch(url)
      .then(resp => console.log(`[✔] Called ${url} - Status: ${resp.status}`))
      .catch(err => console.error(`[✖] Error calling ${url}:`, err))
  );

  // Optionally wait for all to complete
  await Promise.all(promises);

  res.status(200).send('Triggered all APIs');
}
