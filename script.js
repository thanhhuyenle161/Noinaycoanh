// =============================
// Huyền ❤️ Tú
// Script Part 1
// =============================

// Canvas

const canvas = document.getElementById("c");
const ctx = canvas.getContext("2d");

function resize(){

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

}

resize();

window.addEventListener("resize", resize);

// =============================
// Nhạc nền
// =============================

const bgm = document.getElementById("bgm");

window.addEventListener("click",()=>{

    bgm.play().catch(()=>{});

},{once:true});

// =============================
// Typing
// =============================

const messages=[

"Chị sẽ thương em thật nhiều ❤️",

"Mỗi ngày đều sẽ làm bé vui 😊",
  
"Bé làm người yêu chị nhé 💕",

"Huyền ❤️ Tú"

];

let msgIndex=0;
let charIndex=0;

function typing(){

const box=document.getElementById("typing");

if(charIndex<messages[msgIndex].length){

box.innerHTML+=messages[msgIndex][charIndex];

charIndex++;

setTimeout(typing,80);

}
else{

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

// =============================
// Ngôi sao
// =============================

const stars=[];

for(let i=0;i<3000;i++){

stars.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:Math.random()*2,

a:Math.random(),

v:Math.random()*0.015

});

}

// =============================
// Sao băng
// =============================

const meteors=[];

setInterval(()=>{

meteors.push({

x:Math.random()*canvas.width,

y:-100,

vx:-8,

vy:8,

len:180

});

},600);

// =============================
// Tim bay
// =============================

const hearts=[];

setInterval(()=>{

hearts.push({

x:Math.random()*canvas.width,

y:canvas.height+40,

size:18+Math.random()*18,

speed:1+Math.random()*2

});

},250);

// =============================
// Hoa anh đào
// =============================

const petals=[];

for(let i=0;i<80;i++){

petals.push({

x:Math.random()*canvas.width,

y:Math.random()*canvas.height,

r:4+Math.random()*6,

vx:-0.5+Math.random(),

vy:1+Math.random(),

rot:Math.random()*360

});

}
// =============================
// Địa cầu
// =============================

let orbitAngle = 0;
let earthRotation = 0;
let animalAngle = 0;

const earthStars=[];

for(let i=0;i<1500;i++){

    const a=Math.random()*Math.PI*2;
    const r=Math.sqrt(Math.random())*130;

    earthStars.push({

        x:Math.cos(a)*r,
        y:Math.sin(a)*r,
        s:Math.random()*2+0.5,
        alpha:Math.random()

    });

}

// =============================
// Vẽ địa cầu
// =============================

function drawEarth(){

orbitAngle+=0.01;
earthRotation+=0.01;

const cx=canvas.width/2+Math.cos(orbitAngle)*220;
const cy=canvas.height/2+Math.sin(orbitAngle)*220;

// Glow

const glow=ctx.createRadialGradient(

cx,cy,30,
cx,cy,220

);

glow.addColorStop(0,"rgba(120,240,255,.4)");
glow.addColorStop(1,"rgba(0,0,0,0)");

ctx.fillStyle=glow;
ctx.beginPath();
ctx.arc(cx,cy,220,0,Math.PI*2);
ctx.fill();

// Đại dương

const ocean=ctx.createRadialGradient(

cx-30,
cy-30,
20,

cx,
cy,
130

);

ocean.addColorStop(0,"#8ef4ff");
ocean.addColorStop(.35,"#41b7ff");
ocean.addColorStop(.7,"#0a63b5");
ocean.addColorStop(1,"#00153f");

ctx.beginPath();
ctx.fillStyle=ocean;
ctx.arc(cx,cy,130,0,Math.PI*2);
ctx.fill();

// Lục địa

ctx.save();

ctx.translate(cx,cy);
ctx.rotate(earthRotation);

ctx.fillStyle="rgba(40,180,80,.85)";

ctx.beginPath();
ctx.moveTo(-45,-30);
ctx.bezierCurveTo(-10,-60,30,-35,5,-5);
ctx.bezierCurveTo(30,25,-15,35,-35,15);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(30,10);
ctx.bezierCurveTo(60,25,45,55,15,45);
ctx.bezierCurveTo(0,20,5,5,30,10);
ctx.closePath();
ctx.fill();

ctx.beginPath();
ctx.moveTo(-70,0);
ctx.bezierCurveTo(-90,15,-75,40,-45,30);
ctx.bezierCurveTo(-30,10,-45,-5,-70,0);
ctx.closePath();
ctx.fill();

ctx.restore();

// Sao trên địa cầu

for(const s of earthStars){

const rx=s.x*Math.cos(earthRotation)-s.y*Math.sin(earthRotation);

const ry=s.x*Math.sin(earthRotation)+s.y*Math.cos(earthRotation);

ctx.beginPath();

ctx.fillStyle=`rgba(170,255,255,${s.alpha})`;

ctx.arc(cx+rx,cy+ry,s.s,0,Math.PI*2);

ctx.fill();

}

return {x:cx,y:cy};

  }
// =============================
// Mặt trăng + Bé dê + Bé ngựa
// =============================

function drawMoon(){

const mx=canvas.width/2+Math.cos(orbitAngle+1.8)*320;
const my=canvas.height/2+Math.sin(orbitAngle+1.8)*320;

const glow=ctx.createRadialGradient(
mx,my,5,
mx,my,60
);

glow.addColorStop(0,"rgba(255,255,220,.9)");
glow.addColorStop(1,"rgba(255,255,220,0)");

ctx.beginPath();
ctx.fillStyle=glow;
ctx.arc(mx,my,60,0,Math.PI*2);
ctx.fill();

ctx.beginPath();
ctx.fillStyle="#f5f5f5";
ctx.arc(mx,my,34,0,Math.PI*2);
ctx.fill();

}

// =============================
// Hai bé nắm tay
// =============================

function drawAnimals(cx,cy){
function draw(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    // ==========================
    // Nebula
    // ==========================
    const nebula = ctx.createRadialGradient(
        canvas.width*0.3 + Math.sin(Date.now()/5000)*120,
        canvas.height*0.4,
        30,
        canvas.width*0.3,
        canvas.height*0.4,
        500
    );

    nebula.addColorStop(0,"rgba(255,0,180,.18)");
    nebula.addColorStop(.5,"rgba(120,0,255,.08)");
    nebula.addColorStop(1,"transparent");

    ctx.fillStyle = nebula;
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // ==========================
    // Moon
    // ==========================
    const moonX = canvas.width/2 + Math.cos(orbitAngle+1.8)*320;
    const moonY = canvas.height/2 + Math.sin(orbitAngle+1.8)*320;

    const moonGlow = ctx.createRadialGradient(
        moonX,moonY,5,
        moonX,moonY,60
    );

    moonGlow.addColorStop(0,"rgba(255,255,220,.95)");
    moonGlow.addColorStop(1,"rgba(255,255,220,0)");

    ctx.beginPath();
    ctx.fillStyle = moonGlow;
    ctx.arc(moonX,moonY,60,0,Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle="#f4f4f4";
    ctx.arc(moonX,moonY,35,0,Math.PI*2);
    ctx.fill();

    earth();
      // ==========================
    // Bé dê & bé ngựa
    // ==========================

    animalAngle += 0.02;

    const earthX = canvas.width/2 + Math.cos(orbitAngle) * 220;
    const earthY = canvas.height/2 + Math.sin(orbitAngle) * 220;

    const runRadius = 55;

    const groupX = earthX + Math.cos(animalAngle) * runRadius;
    const groupY = earthY + Math.sin(animalAngle) * runRadius;

    // Nắm tay
    ctx.beginPath();
    ctx.strokeStyle="#ffb6c1";
    ctx.lineWidth=3;
    ctx.moveTo(groupX-12,groupY);
    ctx.lineTo(groupX+12,groupY);
    ctx.stroke();

    // Tim
    ctx.font="18px serif";
    ctx.fillText("💕",groupX-8,groupY-12);

    // Bé dê
    ctx.font="32px serif";
    ctx.fillText("🐐",groupX-30,groupY+10);

    // Bé ngựa
    ctx.fillText("🐎",groupX+10,groupY+10);

    // ==========================
    // Quỹ đạo
    // ==========================

    ctx.beginPath();
    ctx.setLineDash([8,8]);
    ctx.strokeStyle="rgba(255,255,255,.15)";
    ctx.arc(
        canvas.width/2,
        canvas.height/2,
        220,
        0,
        Math.PI*2
    );
    ctx.stroke();
    ctx.setLineDash([]);

    // ==========================
    // Sao nền
    // ==========================

    for(const s of stars){

        s.z -= s.speed;

        if(s.z<=0){

            s.z=1000;

            s.x=Math.random()*canvas.width;
            s.y=Math.random()*canvas.height;

        }

        const scale=1000/s.z;

        const x=(s.x-canvas.width/2)*scale+canvas.width/2;
        const y=(s.y-canvas.height/2)*scale+canvas.height/2;

        ctx.beginPath();

        ctx.fillStyle=`rgba(255,255,255,${s.alpha})`;

        ctx.arc(
            x,
            y,
            s.size*scale,
            0,
            Math.PI*2
        );

        ctx.fill();

        s.alpha+=Math.random()*0.04-.02;

        if(s.alpha<0.2)s.alpha=0.2;
        if(s.alpha>1)s.alpha=1;

    }
      // ==========================
    // Sao băng
    // ==========================

    for(let i=meteors.length-1;i>=0;i--){

        const m=meteors[i];

        const grad=ctx.createLinearGradient(
            m.x,
            m.y,
            m.x+m.len,
            m.y-m.len
        );

        grad.addColorStop(0,"white");
        grad.addColorStop(1,"transparent");

        ctx.strokeStyle=grad;
        ctx.lineWidth=2;

        ctx.beginPath();
        ctx.moveTo(m.x,m.y);
        ctx.lineTo(m.x+m.len,m.y-m.len);
        ctx.stroke();

        m.x+=m.vx;
        m.y+=m.vy;

        if(m.y>canvas.height+200){

            meteors.splice(i,1);

        }

    }

    // ==========================
    // Tim bay
    // ==========================

    for(let i=hearts.length-1;i>=0;i--){

        const h=hearts[i];

        ctx.font=h.size+"px serif";

        ctx.fillText("💖",h.x,h.y);

        h.y-=h.speed;

        if(h.y<-50){

            hearts.splice(i,1);

        }

    }

    // ==========================
    // Hoa anh đào
    // ==========================

    for(const p of petals){

        p.x+=p.vx;
        p.y+=p.vy;
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

        ctx.ellipse(
            0,
            0,
            p.r,
            p.r*0.6,
            0,
            0,
            Math.PI*2
        );

        ctx.fill();

        ctx.restore();

    }

    // ==========================
    // Hạt sáng
    // ==========================

    for(const s of spark){

        const x=
        canvas.width/2+
        Math.cos(s.a)*s.r;

        const y=
        canvas.height/2+
        Math.sin(s.a)*s.r;

        ctx.beginPath();

        ctx.fillStyle=`rgba(255,255,255,${s.alpha})`;

        ctx.arc(
            x,
            y,
            s.size,
            0,
            Math.PI*2
        );

        ctx.fill();

        s.alpha+=Math.random()*0.05-.025;

        if(s.alpha<0.2)s.alpha=0.2;
        if(s.alpha>1)s.alpha=1;

    }
    // ==========================
    // Kết thúc draw()
    // ==========================

    requestAnimationFrame(draw);

}

draw();

// ==========================
// Sau 45 giây hiện lời tỏ tình
// ==========================

setTimeout(()=>{

    document.getElementById("proposal").style.display="block";

},45000);

// ==========================
// Nút Có
// ==========================

document.getElementById("yes").onclick=function(){

    // Pháo hoa

    for(let i=0;i<180;i++){

        setTimeout(()=>{

            const x=Math.random()*canvas.width;
            const y=Math.random()*canvas.height;

            ctx.beginPath();

            ctx.fillStyle=
            `hsl(${Math.random()*360},100%,70%)`;

            ctx.arc(
                x,
                y,
                Math.random()*6+2,
                0,
                Math.PI*2
            );

            ctx.fill();

        },i*10);

    }

    alert("💖 Từ nay Huyền là người yêu của Tú nha 💕");

};

// ==========================
// Nút Không chạy trốn
// ==========================

const no=document.getElementById("no");

no.addEventListener("mouseenter",()=>{

    no.style.position="fixed";

    no.style.left=
    Math.random()*(window.innerWidth-140)+"px";

    no.style.top=
    Math.random()*(window.innerHeight-80)+"px";

});
ctx.clearRect(0,0,canvas.width,canvas.height);

// ===================
// Nebula
// ===================
const nebula = ctx.createRadialGradient(
canvas.width*0.3 + Math.sin(Date.now()/4000)*100,
canvas.height*0.4,
50,
canvas.width*0.3,
canvas.height*0.4,
550
);

nebula.addColorStop(0,"rgba(255,0,180,.15)");
nebula.addColorStop(.5,"rgba(120,0,255,.08)");
nebula.addColorStop(1,"transparent");

ctx.fillStyle=nebula;
ctx.fillRect(0,0,canvas.width,canvas.height);

// ===================
// Moon
// ===================
const moonX=canvas.width/2+Math.cos(orbitAngle+1.8)*320;
const moonY=canvas.height/2+Math.sin(orbitAngle+1.8)*320;

const moonGlow=ctx.createRadialGradient(
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
ctx.fillStyle="#f5f5f5";
ctx.arc(moonX,moonY,32,0,Math.PI*2);
ctx.fill();

// ===================
// Earth
// ===================

earth();
animalAngle+=0.02;

const r=55;

const x=cx+Math.cos(animalAngle)*r;
const y=cy+Math.sin(animalAngle)*r;

// Tay

ctx.beginPath();
ctx.strokeStyle="#ffc0cb";
ctx.lineWidth=3;
ctx.moveTo(x-12,y);
ctx.lineTo(x+12,y);
ctx.stroke();

// Tim

ctx.font="18px serif";
ctx.fillText("💕",x-8,y-12);

// Bé dê

ctx.font="32px serif";
ctx.fillText("🐐",x-30,y+10);

// Bé ngựa

ctx.fillText("🐎",x+10,y+10);

}

// =============================
// Hạt sáng quanh địa cầu
// =============================

const spark=[];

for(let i=0;i<180;i++){

spark.push({

a:Math.random()*Math.PI*2,
r:Math.random()*170,
size:Math.random()*3,
alpha:Math.random()

});

}

function drawSparkles(){

for(const s of spark){

const x=
canvas.width/2+
Math.cos(s.a)*s.r;

const y=
canvas.height/2+
Math.sin(s.a)*s.r;

ctx.beginPath();

ctx.fillStyle=
`rgba(255,255,255,${s.alpha})`;

ctx.arc(
x,
y,
s.size,
0,
Math.PI*2
);

ctx.fill();

s.alpha+=Math.random()*0.05-.025;

if(s.alpha<0.2)s.alpha=0.2;
if(s.alpha>1)s.alpha=1;

}

}
<audio id="bgm" autoplay loop preload="auto">
    <source src="noinaycoanh.mp3" type="audio/mpeg">
    Trình duyệt của bạn không hỗ trợ audio.
</audio>
  // =========================
// Phát nhạc
// =========================

const bgm=document.getElementById("bgm");

function playMusic(){

    bgm.play().catch(()=>{});

}

document.addEventListener("click",playMusic,{once:true});
document.addEventListener("touchstart",playMusic,{once:true});
</script>
</body>
</html>
