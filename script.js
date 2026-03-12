window.onload = function(){

const counters = document.querySelectorAll(".counter");

counters.forEach(function(counter){

let target = parseInt(counter.getAttribute("data-target"));
let count = 0;

let speed = target / 100;

let update = setInterval(function(){

count += speed;

if(count >= target){
counter.innerText = target + "+";
clearInterval(update);
}
else{
counter.innerText = Math.floor(count);
}

},20);

});

};