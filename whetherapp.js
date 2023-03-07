
let request = new XMLHttpRequest();
//open a connection
var place="chennai"
let strr=`https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=93f26e3c57081a6210de53b8dcfdfea4`
request.open('GET',strr,true);
// console.log(selectedOption)

request.onload = function(){
    if(request.status>=200 && request.status<400)
    {
        //get the data
        console.log("success!!!");
        let data=JSON.parse(request.responseText);
        console.log(data)
        let imgsrc = 'https://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
        document.getElementById('mypara').innerHTML = data.main.temp+'F';
        document.getElementById('myimg').src= imgsrc;
        document.getElementById('place').innerHTML =place;
        var dropdown = document.getElementById("myDropdown");
        if (dropdown) {
          var selectedOption = dropdown.value;
          console.log(selectedOption);
        } else {
          console.log("Dropdown not found");
        }
    }
    else{
        console.log("couldnot connect to server");
    }
}
//error checking
request.onerror=function(){
    console.log("error!!");
}

//send the request
request.send();