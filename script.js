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
