let player=document.getElementById("player")
let enemies=document.getElementsByClassName("enemy")
let enemies_arr=Array.from(enemies)
let enemies_wrapper=document.getElementById("enemies");
let e_count=0
var mouseX = 0, mouseY = 0;
var xp = 0, yp =0;
var xe=0, ye=0;
let player_x=0;
let player_y=0;
function randomInt(max){
    let n=Math.floor(Math.random() * max);
    return n 
}

function e_move(index){
    const enemy = enemies[0];
    // let xe=0, ye=0
xe += ((xp - xe)/48);
ye += ((yp - ye)/48); 
enemy.style.left=xe+"px"
enemy.style.top=ye+"px"
console.log(xe+","+ye)
}

(document).addEventListener('mousemove', (e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY; 
    // console.log("assigned mouse x and mouse y") 
})

var SPAWNING=setInterval(function(){
//ENEMY SPAWNING
if(enemies.length<10){
    enemies_wrapper.innerHTML+='<div class="enemy"></div>'
    e_count+=1;
    enemies[e_count-1].style.left=randomInt(100)+"vw"
    enemies[e_count-1].style.top=randomInt(100)+"vh"
}
}
,30)

var MOVEMENT = setInterval(function(){
//PLAYER MOVEMENT
// change 12 to alter damping higher is slower

xp += ((mouseX - xp)/48);
yp += ((mouseY - yp)/48); 
player.style.left=xp+"px"
player.style.top=yp+"px"
player_x=player.style.top
player_y=player.style.left

// enemies_arr.forEach(enemy => {
//     let xe=0, ye=0
//     xe += ((xp - xe)/48);
// ye += ((yp - ye)/48); 
// enemy.style.left=xe+"px"
// enemy.style.top=ye+"px"
// console.log(xe+","+ye)
// });


// player_x=player.style.top
// player_y=player.style.left
}, 30);


