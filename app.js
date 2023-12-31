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
           // Timer boshlash vaqti
let startTime = Date.now();

// Timer davomiyligi (millisekundlarda)
let duration = 10000000; // 10 sekund

// Timer tugash vaqti
let endTime = startTime + duration;

// Timer holatini ko'rsatadigan element
let timer = document.getElementById("timer");

// Timer funksiyasi
function countdown() {
  // Hozirgi vaqt
  let now = Date.now();

  // Timer qolgan vaqti
  let remaining = endTime - now;

  // Agar timer tugagan bo'lsa
  if (remaining <= 0) {
    // Timer funksiyasini to'xtatish
    clearInterval(interval);

    // Timer elementiga "0" yozish
    timer.innerHTML = "0";

    // Boshqa ishlar qilish
    // Masalan, alert chiqarish
    // alert("Timer tugadi!");
  } else {
    // Timer elementiga qolgan vaqtni yozish
    timer.innerHTML = Math.ceil(remaining / 1000);
  }
}

// Timer funksiyasini har sekundda ishga tushirish
var interval = setInterval(countdown, 1000);

    
    }
    
 
    
    input.value = '';
}