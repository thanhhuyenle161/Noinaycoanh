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
    
"Bé ơi ",
    
"Chị không giỏi nói những lời ngọt ngào, nhưng chị muốn em biết ",
    
"Rằng chị cũng đang chân trọng hành trình của chúng ta  ❤️",
    
"Theo chị không có hành trình nào là đơn giản ❤️",
    
"Cũng không có sự xuất hiện nào là vô lý  ❤️",
    
"Điều mình có thể làm là học hỏi và lấy kinh nghiệm bước tiếp ❤️",
    
"Ai cũng sẽ có những góc riêng nhưng chị muốn chúng ta cùng nhau chia sẽ ❤️",
    
"Chị sẽ là nơi để em có thể dựa vào những khi em lo lắng và suy nghĩ nhiều ❤️",
    
"Chị cũng sẽ ở bên em những lúc em vui buồn và những khi em mệt ❤️",
    
"Em cứ thoải mái nằm trong lòng chị , yên tâm chị luôn ở đây ❤️",
    
"Với mọi người xung quanh em sao cũng được , nhưng với chị em cứ là chính em ❤️",
    
"Chị thích những cái ôm và cả những sự yên lặng nơi em ❤️",
    
"Chị sẽ thương em thật nhiều ❤️",

"Mỗi ngày đều làm em cười 😊",

"Bé làm người yêu chị nhé 💕",

"Huyền ❤️ Tú"
    
"Chị đến là vì em ❤️",

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

// ==========================================
// SCRIPT PART 2
// Earth + Moon
// ==========================================

// Quỹ đạo

let orbitAngle = 0;
let earthRotation = 0;
let animalAngle = 0;

// ==========================
// Earth Stars
// ==========================

const earthStars = [];

for(let i=0;i<1200;i++){

    const a = Math.random()*Math.PI*2;
    const r = Math.sqrt(Math.random())*120;

    earthStars.push({

        x:Math.cos(a)*r,

        y:Math.sin(a)*r,

        size:Math.random()*2+0.5,

        alpha:Math.random()

    });

}

// ==========================
// Earth
// ==========================

function drawEarth(){

    orbitAngle += 0.004;
    earthRotation += 0.008;

    const cx = canvas.width/2 + Math.cos(orbitAngle)*180;
    const cy = canvas.height/2 + Math.sin(orbitAngle)*120;

    // Glow

    const glow = ctx.createRadialGradient(

        cx,cy,20,

        cx,cy,180

    );

    glow.addColorStop(0,"rgba(120,240,255,.45)");
    glow.addColorStop(1,"rgba(0,0,0,0)");

    ctx.beginPath();
    ctx.fillStyle = glow;
    ctx.arc(cx,cy,180,0,Math.PI*2);
    ctx.fill();

    // Ocean

    const ocean = ctx.createRadialGradient(

        cx-30,
        cy-30,
        10,

        cx,
        cy,
        110

    );

    ocean.addColorStop(0,"#8cf4ff");
    ocean.addColorStop(.4,"#45b7ff");
    ocean.addColorStop(.8,"#0d5fb4");
    ocean.addColorStop(1,"#00173f");

    ctx.beginPath();
    ctx.fillStyle=ocean;
    ctx.arc(cx,cy,110,0,Math.PI*2);
    ctx.fill();

    // Continents

    ctx.save();

    ctx.translate(cx,cy);
    ctx.rotate(earthRotation);

    ctx.fillStyle="#35c96b";

    ctx.beginPath();
    ctx.moveTo(-40,-25);
    ctx.bezierCurveTo(-5,-55,35,-30,10,-5);
    ctx.bezierCurveTo(30,25,-15,35,-35,15);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(25,10);
    ctx.bezierCurveTo(55,25,40,55,10,42);
    ctx.bezierCurveTo(-5,20,0,5,25,10);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    // Stars

    for(const s of earthStars){

        const rx =

            s.x*Math.cos(earthRotation)

            -

            s.y*Math.sin(earthRotation);

        const ry =

            s.x*Math.sin(earthRotation)

            +

            s.y*Math.cos(earthRotation);

        ctx.beginPath();

        ctx.fillStyle=`rgba(170,255,255,${s.alpha})`;

        ctx.arc(cx+rx,cy+ry,s.size,0,Math.PI*2);

        ctx.fill();

    }

    return {

        x:cx,

        y:cy

    };

}

// ==========================
// Moon
// ==========================

function drawMoon(){

    const mx =

    canvas.width/2 +

    Math.cos(orbitAngle+1.8)*270;

    const my =

    canvas.height/2 +

    Math.sin(orbitAngle+1.8)*180;

    const glow = ctx.createRadialGradient(

        mx,my,5,

        mx,my,55

    );

    glow.addColorStop(0,"rgba(255,255,220,.9)");
    glow.addColorStop(1,"rgba(255,255,220,0)");

    ctx.beginPath();
    ctx.fillStyle=glow;
    ctx.arc(mx,my,55,0,Math.PI*2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle="#f4f4f4";
    ctx.arc(mx,my,28,0,Math.PI*2);
    ctx.fill();

}
