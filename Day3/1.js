let getWeather = () => {

  let cityName = "pune";



  /*let url = "https://api.openweathermap.org/data/2.5/weatherappid=1a4f60257afa88ca5d876ca1a01d32e9&units=metric&?q=mumbai";*/


  let url = "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    cityName;
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onload = () => {
    console.log(xhr.responseText);
  };

  xhr.send();
};