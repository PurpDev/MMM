alert("Hello from APP.JS");
var pics = [
"flemme.png",
"jdlf.png",
"okayy.png"
]

var btn = document.querySelector("button");
var img = document.querySelector("img");
var counter = 0;
btn.addEventListener("click", function(){
    if (counter === 3){
        counter = 0
    }
    img.src = pics[counter]
    counter = counter + 1
    

})
const button = document.querySelector('button2');

button.addEventListener('click', event => {
  button.innerHTML = `Nombre de clics : ${event.detail}`;
});


