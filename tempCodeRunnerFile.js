// GET DATA FROM LOCAL STORAGE
const data = JSON.parse(localStorage.getItem("soilData")) || {
    nitrogen: 80,
    phosphorus: 25,
    potassium: 35,
    ph: 6,
    crop: "Wheat"
};
console.log(data);

localStorage.setItem("soilData", JSON.stringify({
  nitrogen: n,
  phosphorus: p,
  potassium: k,
  ph: ph,
  crop: crop
}));

window.location.href = "recommendation.html";

// SHOW SUMMARY
const summaryDiv = document.getElementById("summary");

summaryDiv.innerHTML = `
  <div class="summary-box">Nitrogen <strong>${data.nitrogen} mg/kg</strong></div>
  <div class="summary-box">Phosphorus <strong>${data.phosphorus} mg/kg</strong></div>