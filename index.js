const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i",
"j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1",
"2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",
"(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let leftPassword = document.getElementById("left-pass")
let rightPassword = document.getElementById("right-pass")
let btn = document.getElementById("btn")
function generatRandomlockL(){
    for(let i = 0; i < characters.length; i++){
        
        leftPassword.textContent =  characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)];
    }
}


function generatRandomlockR(){
    for(let i = 0; i < characters.length; i++){
        rightPassword.textContent = characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] + 
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)] +
         characters[Math.floor(Math.random() * characters.length)];
    }
}

btn.addEventListener("click", function(){
    generatRandomlockL();
    generatRandomlockR();
})