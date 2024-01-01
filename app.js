let input = document.querySelector('input');
let user_icon = document.querySelector('.user-icon');
let blurred_box = document.querySelector('.blurred-box');
 
input.addEventListener('input', ()=>{
    if(input.value.length <= 5) {
        user_icon.style = "border: solid red";
        timer.style = "color: red"
    } else {
        user_icon.style = "border: solid green";
        timer.style = "color: green"
    }
})


function bosing(){

    if(input.value.length == 0){
        alert('Malumot kiriting')
    } else{
           
let startTime = Date.now();


let duration = 10000000; 


let endTime = startTime + duration;


let timer = document.getElementById("timer");


function countdown() {
  
  let now = Date.now();

  
  let remaining = endTime - now;

  
  if (remaining <= 0) {
   
    clearInterval(interval);


    timer.innerHTML = "0";

  
  } else {
   
    timer.innerHTML = Math.ceil(remaining / 1000);
  }
}

    let interval = setInterval(countdown, 1000);

    }
    
    input.value = '';
}