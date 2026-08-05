const input = document.querySelector("input");
const button = document.querySelector("button");

button.addEventListener("click", () => {
    const city = input.value;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fdc7cfc021ffb161527a8a810d1e5127`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        })
        .catch(error => console.error(error));
});