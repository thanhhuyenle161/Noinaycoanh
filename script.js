// ==========================================
// HUYỀN ❤️ TÚ
// SCRIPT PART 1A
// ==========================================

// ==========================
// Canvas
// ==========================

const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

function resize() {

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);

// ==========================
// Music
// ==========================

const bgm = document.getElementById("bgm");

function playMusic(){

    if(!bgm) return;

    bgm.play().catch(()=>{});

}

document.addEventListener("click",playMusic,{once:true});
document.addEventListener("touchstart",playMusic,{once:true});

// ==========================
// Typing
// ==========================

const messages=[

"Chị sẽ thương em thật nhiều ❤️",

"Mỗi ngày đều làm em cười 😊",

"Bé làm người yêu chị nhé 💕",

"Huyền ❤️ Tú"

];

let msgIndex=0;
let charIndex=0;

function typing(){

    const box=document.getElementById("typing");

    if(!box) return;

    if(charIndex<messages[msgIndex].length){

        box.innerHTML+=messages[msgIndex][charIndex];

        charIndex++;

        setTimeout(typing,80);

    }else{

        setTimeout(()=>{

            box.innerHTML="";

            charIndex=0;

            msgIndex++;

            if(msgIndex>=messages.length){

                msgIndex=0;

            }

            typing();

        },1800);

    }

}

typing();
// ==========================
// Stars
// ==========================

const stars = [];

for (let i = 0; i < 800; i++) {

    stars.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,

        r: Math.random() * 2 + 0.3,

        alpha: Math.random(),

        speed: Math.random() * 0.02 + 0.005

    });

}

// ==========================
// Meteors
// ==========================

const meteors = [];

setInterval(() => {

    meteors.push({

        x: Math.random() * canvas.width + 200,

        y: -100,

        vx: -10,

        vy: 10,

        len: 180

    });

}, 700);

// ==========================
// Floating Hearts
// ==========================

const hearts = [];

setInterval(() => {

    hearts.push({

        x: Math.random() * canvas.width,

        y: canvas.height + 50,

        size: 18 + Math.random() * 18,

        speed: 1 + Math.random() * 2,

        alpha: 1

    });

}, 250);

// ==========================
// Sakura Petals
// ==========================

const petals = [];

for (let i = 0; i < 80; i++) {

    petals.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        r: 4 + Math.random() * 6,

        vx: Math.random() - 0.5,

        vy: 1 + Math.random(),

        rot: Math.random() * 360,

        rotSpeed: Math.random() * 2 + 1

    });

}
