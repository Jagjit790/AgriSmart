document.addEventListener("DOMContentLoaded", () => {
  const authBtn = document.getElementById("authBtn");
  if (!authBtn) return;

  const token = localStorage.getItem("token");
  authBtn.innerText = token ? "Logout" : "Login";

  authBtn.addEventListener("click", () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      alert("Logged out");
      window.location.href = "index.html";
    } else {
      window.location.href = "login.html";
    }
  });
});

const city = "Jalandhar";

async function getWeather() {
  try {
    const baseUrl = window.API_BASE_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/weather?city=${city}`);

    if (!res.ok) {
      throw new Error(`HTTP Error: ${res.status}`);
    }

    const data = await res.json();

    if (!data || data.cod !== 200) {
      throw new Error(data?.message || "Failed to fetch weather");
    }

    document.getElementById("cityName").innerText = `${data.name}, ${data.sys.country}`;

    const temp = data.main.temp;
    const humidity = data.main.humidity;
    const weather = data.weather[0].main;
    const rainfall = data.rain?.["1h"] || 0;

    document.getElementById("temp").innerText = `${temp}°C`;
    document.getElementById("humidity").innerText = `${humidity}%`;
    document.getElementById("rain").innerText = `${rainfall} mm`;
    document.getElementById("forecast").innerText = weather;

    let suggestion = "";
    if (rainfall > 5) {
      suggestion = "⚠️ Heavy rain expected. Avoid fertilizer application.";
    } else if (humidity > 80) {
      suggestion = "⚠️ High humidity. Apply fertilizer carefully.";
    } else if (temp > 35) {
      suggestion = "⚠️ Too hot. Apply fertilizer in morning/evening.";
    } else {
      suggestion = "✅ Good conditions. Apply fertilizer in morning.";
    }

    document.getElementById("suggestionText").innerText = suggestion;

  } catch (err) {
    console.error("Error:", err);
    alert("Weather error: " + err.message);
  }
}

getWeather();
