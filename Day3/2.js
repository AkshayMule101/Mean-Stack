let getWeather = () => {

  let cityName = "pune";



  /*let url = "https://api.openweathermap.org/data/2.5/weatherappid=1a4f60257afa88ca5d876ca1a01d32e9&units=metric&?q=mumbai";*/


  let url = "https://api.openweathermap.org/data/2.5/weather?appid=7023923dd26a725da995c75b65864de5&units=metric&q=" +
    cityName;
  let xhr = new XMLHttpRequest();

  xhr.open("GET", url);

  xhr.onload = () => {
    const refjson = JSON.parse(xhr.responseText);
    console.log(refjson);
    domOpeationHere(refjson);
  };

  xhr.send();
};

let domOpeationHere = (refjson) => {
  const parent = document.querySelector("#parent");

  const newElement = parent.children[0].cloneNode(true);

  newElement.innerHTML = "Hello World";
  parent.insertBefore(newElement, parent.firstChild);
}; 