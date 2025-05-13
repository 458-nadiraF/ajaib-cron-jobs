export default async function handler(req, res) {
  const urls = ['https://puppeteer-render-zx37.onrender.com/bersiap'];
  await Promise.all(urls.map(url => fetch(url)));
  res.status(200).send('Bersiap API triggered');
}
