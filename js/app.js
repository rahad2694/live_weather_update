const API_Key = '28cea854d8463ae69ecfde1c691cfe94';
const inputBox = document.getElementById('input-box');
const cityName = document.getElementById('city-name');
const weatherIcon = document.getElementById('weather-icon');
const weatherCondition = document.getElementById('weather-condition');
const temperature = document.getElementById('temperature-value');
const errorMessage = document.getElementById('error-message');
const resultArea = document.getElementById('result-area');
const searchBtn = () =>{
    errorMessage.innerText='';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputBox.value}&appid=${API_Key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayResult(data));
    inputBox.value='';
}
const displayResult= (result) =>{
    if(result.cod === 200){
        resultArea.classList.remove('d-none');
        console.log(result);
        cityName.innerText=`${result.name}`;
        temperature.innerText=`${result.main.temp}`;
        const iconUrl = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
        console.log(iconUrl);
        weatherIcon.setAttribute('src',iconUrl);
        weatherCondition.innerText=`${result.weather[0].description}`
    } else{
        errorMessage.innerText='No city Found !';
        resultArea.classList.add('d-none');
    }
    
}