const apiKey = 'cb586dbfbfd94a44c9616ee112b52e11';

const btn = document.querySelector('#btn');
const cityInput = document.querySelector('#city');

const li1 = document.querySelector('#li-1');
const li2 = document.querySelector('#li-2');
const li3 = document.querySelector('#li-3');
const li4 = document.querySelector('#li-4');
const li5 = document.querySelector('#li-5');
const li6 = document.querySelector('#li-6');
const li7 = document.querySelector('#li-7');

const allLi = document.querySelectorAll('li');

const fetchWeather = () => {
    const city = cityInput.value.trim();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    allLi.forEach(li => {
        li.innerText = "Loading...";
    });

    axios.get(url)
        .then((response) => {
            li1.innerText = "Temperature: " + response.data.main.temp + ' °C';
            li2.innerText = "Humidity: " + response.data.main.humidity + ' %';
            li3.innerText = "Pressure: " + response.data.main.pressure + ' hPa';
            li4.innerText = "Temp Min: " + response.data.main.temp_min + ' °C';
            li5.innerText = "Temp Max: " + response.data.main.temp_max + ' °C';
            li6.innerText = response.data.main.sea_level  + ' hPa';
            li7.innerText = "Visibility: " + (response.data.visibility / 1000) + ' km';
        })
        .catch((error) => {
            console.log(error);
            alert("City not found or API error. Please try again!");
        });
};

btn.addEventListener('click', fetchWeather);

cityInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        btn.click();
    }
});
