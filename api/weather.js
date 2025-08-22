export default async function handler(req,res){
  try{
    const q = req.query.q;
    if(!q) return res.status(400).json({error:'missing q'});
    const key = process.env.WEATHER_API_KEY;
    if(!key) return res.status(500).json({error:'missing key'});
    const days = req.query.days || 8;
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${encodeURIComponent(key)}&q=${encodeURIComponent(q)}&days=${encodeURIComponent(days)}&aqi=yes&alerts=yes`;
    const apiRes = await fetch(url);
    const data = await apiRes.json();
    res.setHeader('Cache-Control','s-maxage=60, stale-while-revalidate=120');
    return res.status(apiRes.status).json(data);
  }catch(e){ console.error(e); return res.status(500).json({error:'internal'}) }
}
