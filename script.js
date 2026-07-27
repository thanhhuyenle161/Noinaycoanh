// =====================================
// HUYỀN ❤️ TÚ
// SCRIPT PART 1
// =====================================

// =====================
// Canvas
// =====================

const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resize();
window.addEventListener("resize", resize);

// =====================
// Nhạc nền
// =====================

const bgm = document.getElementById("bgm");

function playMusic() {
    bgm.play().catch(() => {});
}

document.addEventListener("click", playMusic, {
    once: true
});

document.addEventListener("touchstart", playMusic, {
    once: true
});

// =====================
// Typing text
// =====================

const messages = [

    "Bé làm người yêu chị nhé ❤️",

    "Chị sẽ thương em thật nhiều 💕",

    "Mỗi ngày đều làm em cười 😊",

    "Huyền ❤️ Tú"

];

let msgIndex = 0;
let charIndex = 0;

function typing() {

    const box = document.getElementById("typing");

    if (charIndex < messages[msgIndex].length) {

        box.innerHTML += messages[msgIndex][charIndex];

        charIndex++;

        setTimeout(typing, 80);

    } else {

        setTimeout(() => {

            box.innerHTML = "";

            charIndex = 0;

            msgIndex++;

            if (msgIndex >= messages.length) {

                msgIndex = 0;

            }

            typing();

        }, 1800);

    }

}

typing();

// =====================
// Stars
// =====================

const stars = [];

for (let i = 0; i < 3000; i++) {

    stars.push({

        x: Math.random() * window.innerWidth,

        y: Math.random() * window.innerHeight,

        z: Math.random() * 1000,

        size: Math.random() * 2 + 0.5,

        alpha: Math.random(),

        speed: Math.random() * 0.8 + 0.2

    });

}

// =====================
// Meteors
// =====================

const meteors = [];

setInterval(() => {

    meteors.push({

        x: Math.random() * canvas.width,

        y: -50,

        vx: -8,

        vy: 8,

        len: 180

    });

}, 700);

// =====================
// Floating hearts
// =====================

const hearts = [];

setInterval(() => {

    hearts.push({

        x: Math.random() * canvas.width,

        y: canvas.height + 50,

        size: 18 + Math.random() * 18,

        speed: 1 + Math.random() * 2

    });

}, 250);

// =====================
// Sakura petals
// =====================

const petals = [];

for (let i = 0; i < 80; i++) {

    petals.push({

        x: Math.random() * canvas.width,

        y: Math.random() * canvas.height,

        r: Math.random() * 6 + 4,

        vx: Math.random() - 0.5,

        vy: Math.random() + 1,

        rot: Math.random() * 360

    });
    function draw(){
ctx.clearRect(0,0,canvas.width,canvas.height);
// ===== Mặt trăng =====
const moonX = canvas.width/2 + Math.cos(orbitAngle+1.8)*320;
const moonY = canvas.height/2 + Math.sin(orbitAngle+1.8)*320;

const moonGlow = ctx.createRadialGradient(
moonX,moonY,5,
moonX,moonY,55
);

moonGlow.addColorStop(0,"rgba(255,255,220,.9)");
moonGlow.addColorStop(1,"rgba(255,255,220,0)");

ctx.beginPath();
ctx.fillStyle=moonGlow;
ctx.arc(moonX,moonY,55,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#f3f3f3";
ctx.arc(moonX,moonY,32,0,Math.PI*2);
ctx.fill();
earth();
// =======================
// Bé dê và bé ngựa nắm tay
// =======================

animalAngle += 0.02;

// Vị trí của địa cầu
const earthX = canvas.width/2 + Math.cos(orbitAngle) * 220;
const earthY = canvas.height/2 + Math.sin(orbitAngle) * 220;

// Chạy bên trong địa cầu
const runRadius = 55;

// Tâm của hai bé
const groupX = earthX + Math.cos(animalAngle) * runRadius;
const groupY = earthY + Math.sin(animalAngle) * runRadius;

// Đường nối hai bé (nắm tay)
ctx.beginPath();
ctx.strokeStyle = "#ffb6c1";
ctx.lineWidth = 3;
ctx.moveTo(groupX - 12, groupY);
ctx.lineTo(groupX + 12, groupY);
ctx.stroke();

// Trái tim nhỏ giữa hai bé
ctx.font = "18px serif";
ctx.fillText("💕", groupX - 8, groupY - 12);

// Bé dê
ctx.font = "32px serif";
ctx.fillText("🐐", groupX - 30, groupY + 10);

// Bé ngựa
ctx.fillText("🐎", groupX + 10, groupY + 10);

ctx.beginPath();
ctx.strokeStyle="rgba(255,255,255,0.15)";
ctx.setLineDash([8,8]);
ctx.arc(canvas.width/2,canvas.height/2,220,0,Math.PI*2);
ctx.stroke();
ctx.setLineDash([]);
for(const s of stars){

    // Sao tiến về phía người xem
    s.z -= s.speed;

    if(s.z <= 0){

        s.z = 1000;

        s.x = Math.random()*canvas.width;

        s.y = Math.random()*canvas.height;

    }

    const scale = 1000 / s.z;

    const x = (s.x - canvas.width/2) * scale + canvas.width/2;

    const y = (s.y - canvas.height/2) * scale + canvas.height/2;

    const radius = s.size * scale;

    ctx.beginPath();

    ctx.fillStyle=`rgba(255,255,255,${s.alpha})`;

    ctx.arc(x,y,radius,0,Math.PI*2);

    ctx.fill();

    s.alpha += Math.random()*0.04 - 0.02;

    if(s.alpha<0.2)s.alpha=0.2;

    if(s.alpha>1)s.alpha=1;

}

for(let i=meteors.length-1;i>=0;i--){
const m=meteors[i];
const grad=ctx.createLinearGradient(m.x,m.y,m.x+m.len,m.y-m.len);
grad.addColorStop(0,'white');
grad.addColorStop(1,'transparent');
ctx.strokeStyle=grad;
ctx.lineWidth=2;
ctx.beginPath();
ctx.moveTo(m.x,m.y);
ctx.lineTo(m.x+m.len,m.y-m.len);
ctx.stroke();
m.x+=m.vx;m.y+=m.vy;
if(m.y>canvas.height+200) meteors.splice(i,1);}

requestAnimationFrame(draw);}
const hearts=[];

setInterval(()=>{

hearts.push({

x:Math.random()*canvas.width,

y:canvas.height+30,

s:Math.random()*18+18

});

},250);
const spark=[];

for(let i=0;i<160;i++){

spark.push({

a:Math.random()*Math.PI*2,

r:Math.random()*170,

s:Math.random()*3,

alpha:Math.random()

});

}
const nebula=ctx.createRadialGradient(

canvas.width*.3+Math.sin(Date.now()/5000)*120,

canvas.height*.4,

50,

canvas.width*.3,

canvas.height*.4,

500

);

nebula.addColorStop(0,"rgba(255,0,180,.16)");
nebula.addColorStop(.5,"rgba(120,0,255,.08)");
nebula.addColorStop(1,"transparent");



for(const s of spark){

const x=canvas.width/2+Math.cos(s.a)*s.r;

const y=canvas.height/2+Math.sin(s.a)*s.r;

ctx.beginPath();

ctx.fillStyle=`rgba(255,255,255,${s.alpha})`;

ctx.arc(x,y,s.s,0,Math.PI*2);

ctx.fill();

s.alpha+=Math.random()*0.06-.03;

if(s.alpha<.2)s.alpha=.2;
if(s.alpha>1)s.alpha=1;

}
for(let i=hearts.length-1;i>=0;i--){

const h=hearts[i];

ctx.font=h.s+"px serif";

ctx.fillText("💖",h.x,h.y);

h.y-=2;

if(h.y<-50){

hearts.splice(i,1);

}

}
for(const p of petals){

p.y+=p.vy;
p.x+=p.vx;
p.rot+=2;

if(p.y>canvas.height+20){

p.y=-20;
p.x=Math.random()*canvas.width;

}

ctx.save();

ctx.translate(p.x,p.y);

ctx.rotate(p.rot*Math.PI/180);

ctx.fillStyle="#ffc0cb";

ctx.beginPath();

ctx.ellipse(0,0,p.r,p.r*0.6,0,0,Math.PI*2);

ctx.fill();

ctx.restore();

}
ctx.fillStyle=nebula;
ctx.fillRect(0,0,canvas.width,canvas.height);
draw();


// Sau 30 giây hiện lời tỏ tình
setTimeout(()=>{

document.getElementById("proposal").style.display="block";

},45000);

// Bấm Có
document.getElementById("yes").onclick=function(){

for(let i=0;i<120;i++){

setTimeout(()=>{

const x=Math.random()*canvas.width;
const y=Math.random()*canvas.height;

ctx.beginPath();

ctx.fillStyle=`hsl(${Math.random()*360},100%,70%)`;

ctx.arc(x,y,Math.random()*6+3,0,Math.PI*2);

ctx.fill();

},i*15);

}

alert("💖 Từ nay Huyền là người yêu của Tú nha 💕");

}
// Nút Không chạy khắp nơi 
const no = document.getElementById("no");

no.addEventListener("mouseenter",()=>{

    no.style.position = "fixed";

    no.style.left = Math.random()*(window.innerWidth-120)+"px";

    no.style.top = Math.random()*(window.innerHeight-60)+"px";

}
