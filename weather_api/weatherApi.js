let c = console.log;
let $container = document.querySelector(".wather");
let loading = document.getElementById("spinner");

loading.style.display = 'none';

function cargarClima() {
  async function getData() {
    try {
      let ciudad = document.getElementById("ciudad").value;
      let url = `https://api.openweathermap.org/data/2.5/weather?id=${ciudad}&appid=55044fd16ae30d3942e4e84ba4e8aeb6`;
      let response = await axios.get(url),
        json = await response.data;

      const div = document.getElementById('card');
      let celcius =(json.main.temp - 273.15);
      let max = (json.main.temp_max - 273.15);
      let min = (json.main.temp_min - 273.15);

      setTimeout((e) => {
        div.innerHTML = `
          <img src="http://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png" alt="">
          <h2>${celcius.toFixed(2)} °C</h2>
          <p>Max: ${max.toFixed(2)}°c</p>
          <p>Min: ${min.toFixed(2)}°c</p>
        `;

        loading.style.display = 'none'
      }, 1500);

    } catch (error) {
      let message = error.statusText || "Ocurrio un Error";
      c(`Error ${message}`);
    }
  }
  getData();
}

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  loading.style.display = 'block'
  cargarClima();
});