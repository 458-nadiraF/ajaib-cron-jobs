export const config = {
  schedule: '0 1 * * 1-5', // 08:00 WIB (Jakarta) = 01:00 UTC
};

export default async function handler(req, res) {
  await fetch('https://your-api.com/morning-task');
  return new Response('Morning task triggered');
}
