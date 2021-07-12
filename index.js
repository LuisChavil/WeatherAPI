var button = document.querySelector('.search');
var inputValue = document.querySelector('.inputValue');

var Cityname = document.querySelector('.name');
var desc = document.querySelector('.desc');
var temp = document.querySelector('.temp');
var time = document.querySelector('.time');

button.addEventListener('click', function(event){
  
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=6a4e8e6260f0bf8f30e8ce73e886e151')
.then(res => res.json())
.then(data => {
   
    var nameValue = data['name'];
    var tempValue = data['main']['temp'];
    var descValue = data['weather'][0]['description'];
    var timeValue = data.timezone
    
    

  
    let final = 1.8*(tempValue-273) + 32;
    
    Cityname.innerHTML = nameValue;
    temp.innerHTML = final.toFixed(2) + " Fahrenheit";
    desc.innerHTML = descValue;
    time.innerHTML = timeValue;
})



.catch(err => alert("Wrong city name or nothing entered")) 
});

