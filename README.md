# 🌙 Dark Weather App  

🔗 **Live Demo:** [Weather App on Vercel](https://weather-app-cyan-zeta-65.vercel.app/)  

A modern **dark-themed weather web app** that shows current weather, hourly forecasts (graph), 8-day forecasts, and weather alerts using **[WeatherAPI.com](https://www.weatherapi.com/)**.  
Deployed securely on **Vercel** with API key protection via serverless functions.  

---

## 📌 Features
- 🌡️ **Current Weather** → temperature, condition, humidity, wind speed  
- ⏰ **Hourly Forecast** → dynamic chart view  
- 📅 **8-Day Forecast** → daily temperature highs/lows & conditions  
- ⚠️ **Weather Alerts** → storms, warnings (if available)  
- 🗺️ **Map Integration** → location marker for searched city  
- 🌙 **Dark Theme** → sleek UI design for modern look  
- 🔒 **Serverless Proxy** → API key hidden in backend for security  

---

## 📂 Project Structure

weather-app/
├─ api/
│ └─ weather.js # Vercel serverless function (proxy to WeatherAPI)
├─ public/
│ └─ index.html # Main frontend (dark UI)
├─ server.js # Optional Express server for local development
├─ package.json
├─ package-lock.json
├─ .gitignore
└─ README.md



---

## 🚀 How It Works
1. User searches for a city.  
2. Frontend calls → `/api/weather?q=City&days=8`.  
3. Serverless function (`api/weather.js`) forwards request to **WeatherAPI** with your secret key (kept in **Vercel env vars**).  
4. JSON response is sent back to the frontend.  
5. Weather UI updates instantly with charts, forecasts, and alerts.  

---

## 🛠️ Local Development Setup

1. **Clone the repo**
git clone https://github.com/<your-username>/<repo>.git
cd <repo>

 

2. **Install dependencies**
npm install

 

3. **Set up environment variable**
Create a `.env.local` file (git-ignored):
WEATHER_API_KEY=your_real_weatherapi_key

 

4. **Run locally**
macOS/Linux
export WEATHER_API_KEY="your_real_key_here"
node server.js

Windows PowerShell
$env:WEATHER_API_KEY="your_real_key_here"
node server.js

 

Open in browser:  
👉 http://localhost:3000/index.html  

Or run with **Vercel CLI**:
vercel dev

 

---

## 🌍 Deployment on Vercel

1. Push your project to **GitHub**.  
2. Go to [Vercel](https://vercel.com/) → **Import Project** → select repo.  
3. In **Project Settings → Environment Variables**:  
WEATHER_API_KEY=your_real_weatherapi_key

 
4. Deploy the app.  
5. Your app will be live:  
https://your-app-name.vercel.app/

 

✅ Example API test:  
curl "https://your-app-name.vercel.app/api/weather?q=London&days=1"

 

---

## ⚡ Caching & Optimization
Responses are cached to prevent hitting API rate limits:  
Cache-Control: s-maxage=60, stale-while-revalidate=120

 
- ⏳ `s-maxage=60` → cache for 60 seconds in Vercel’s CDN  
- 🔄 `stale-while-revalidate=120` → serves cached data while refreshing  

You can adjust caching in `api/weather.js`.

---

## 🐞 Troubleshooting

- ❌ **"Missing WEATHER_API_KEY"** → Add key in `.env.local` or Vercel Project Settings.  
- ❌ **401 Unauthorized** → Wrong or expired API key.  
- ❌ **429 Too Many Requests** → Free plan limit exceeded. Increase caching or upgrade plan.  

Debug locally with:
curl "http://localhost:3000/api/weather?q=London&days=1"

 

---

## 📸 Screenshots  

<p align="center">
  <img src="public/screenshot-1.png" alt="Dark Weather App Home" width="80%">
</p>

<p align="center">
  <img src="public/screenshot-2.png" alt="Weather Forecast Example" width="80%">
</p>

*(Place screenshots inside the `public/` folder and update the file names accordingly.)*

---

## 📜 License
**MIT License** — free for personal and commercial use.  

---

## ✨ Tech Stack
- **Frontend** → HTML, CSS, JavaScript  
- **Backend** → Node.js, Vercel Serverless Functions  
- **API** → [WeatherAPI.com](https://www.weatherapi.com/)  
- **Deployment** → Vercel  

---

🔥 Built with ❤️ using JavaScript, Node.js & Vercel 
