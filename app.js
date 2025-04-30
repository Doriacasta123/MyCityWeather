document.getElementById("weather-form").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const city = document.getElementById("city-input").value.trim();
    const apiKey = "14e8e85bed8ac2a2ab667e6cf5b27e93"; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=es&units=metric`;
  
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Ciudad no encontrada");
      const data = await res.json();
  
      document.getElementById("city-name").textContent = data.name;
      document.getElementById("temperature").textContent = `Temperatura: ${data.main.temp}°C`;
      document.getElementById("description").textContent = `Condición: ${data.weather[0].description}`;
      document.getElementById("weather-result").classList.remove("hidden");
  
    } catch (error) {
      alert("No se pudo obtener el clima: " + error.message);
    }
  });