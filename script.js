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
    
"Rằng chị cũng đang trân trọng hành trình của chúng ta  ❤️",
    
"Theo chị không có hành trình nào là đơn giản ❤️",
    
"Cũng không có sự xuất hiện nào là vô lý  ❤️",
    
"Điều mình có thể làm là học hỏi và lấy kinh nghiệm bước tiếp ❤️",
    
"Ai cũng sẽ có những góc riêng nhưng chị muốn chúng ta cùng nhau chia sẻ ❤️",
    
"Chị sẽ là nơi để em có thể dựa vào những khi em lo lắng và suy nghĩ nhiều ❤️",
    
"Chị cũng sẽ ở bên em những lúc em vui buồn và những khi em mệt ❤️",
    
"Em cứ thoải mái tựa vào chị nhé ❤️ , yên tâm chị luôn ở đây ❤️",
    
"Với mọi người xung quanh em sao cũng được , nhưng với chị em cứ là chính em ❤️",
    
"Chị thích những cái ôm và cả những sự yên lặng nơi em ❤️",

"Chị đến là vì em ❤️",
    
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
// ==========================================
// SCRIPT PART 3
// Animals + Spark
// ==========================================

// ==========================
// Spark
// ==========================

const spark = [];

for(let i=0;i<180;i++){

    spark.push({

        angle:Math.random()*Math.PI*2,

        radius:Math.random()*170,

        size:Math.random()*3+1,

        alpha:Math.random()

    });

}

// ==========================
// Animals
// ==========================

function drawAnimals(cx,cy){

    animalAngle += 0.02;

    const r = 60;

    const x = cx + Math.cos(animalAngle)*r;

    const y = cy + Math.sin(animalAngle)*r;

    // tay nắm

    ctx.beginPath();

    ctx.strokeStyle="#ffc0cb";

    ctx.lineWidth=3;

    ctx.moveTo(x-12,y);

    ctx.lineTo(x+12,y);

    ctx.stroke();

    // tim

    ctx.font="18px serif";

    ctx.fillText("💕",x-8,y-12);

    // dê

    ctx.font="32px serif";

    ctx.fillText("🐐",x-30,y+10);

    // ngựa

    ctx.fillText("🐎",x+10,y+10);

}

// ==========================
// Spark
// ==========================

function drawSpark(){

    for(const s of spark){

        const x=

        canvas.width/2+

        Math.cos(s.angle)*s.radius;

        const y=

        canvas.height/2+

        Math.sin(s.angle)*s.radius;

        ctx.beginPath();

        ctx.fillStyle=

        `rgba(255,255,255,${s.alpha})`;

        ctx.arc(x,y,s.size,0,Math.PI*2);

        ctx.fill();

        s.alpha += Math.random()*0.05-0.025;

        if(s.alpha<0.2) s.alpha=0.2;

        if(s.alpha>1) s.alpha=1;

    }

}
// ==========================================
// SCRIPT PART 4
// Main Draw Loop
// ==========================================

function draw() {

    // Xóa khung hình cũ
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // ==========================
    // Nền đen
    // ==========================

    ctx.fillStyle = "#04020d";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // ==========================
    // Stars
    // ==========================

    for (const s of stars) {

        s.alpha += (Math.random() - 0.5) * 0.03;

        if (s.alpha < 0.2) s.alpha = 0.2;
        if (s.alpha > 1) s.alpha = 1;

        ctx.beginPath();
        ctx.fillStyle = `rgba(255,255,255,${s.alpha})`;
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();

    }

    // ==========================
    // Meteors
    // ==========================

    for (let i = meteors.length - 1; i >= 0; i--) {

        const m = meteors[i];

        ctx.beginPath();

        const g = ctx.createLinearGradient(
            m.x,
            m.y,
            m.x + m.len,
            m.y - m.len
        );

        g.addColorStop(0, "white");
        g.addColorStop(1, "transparent");

        ctx.strokeStyle = g;
        ctx.lineWidth = 2;

        ctx.moveTo(m.x, m.y);
        ctx.lineTo(m.x + m.len, m.y - m.len);
        ctx.stroke();

        m.x += m.vx;
        m.y += m.vy;

        if (m.y > canvas.height + 100) {

            meteors.splice(i, 1);

        }

    }

    // ==========================
    // Hearts
    // ==========================

    for (let i = hearts.length - 1; i >= 0; i--) {

        const h = hearts[i];

        ctx.globalAlpha = h.alpha;

        ctx.font = h.size + "px serif";
        ctx.fillText("💖", h.x, h.y);

        ctx.globalAlpha = 1;

        h.y -= h.speed;

        if (h.y < -80) {

            hearts.splice(i, 1);

        }

    }

    // ==========================
    // Sakura
    // ==========================

    for (const p of petals) {

        p.x += p.vx;
        p.y += p.vy;
        p.rot += p.rotSpeed;

        if (p.y > canvas.height + 30) {

            p.y = -30;
            p.x = Math.random() * canvas.width;

        }

        ctx.save();

        ctx.translate(p.x, p.y);

        ctx.rotate(p.rot * Math.PI / 180);

        ctx.fillStyle = "#ffc8dd";

        ctx.beginPath();

        ctx.ellipse(
            0,
            0,
            p.r,
            p.r * 0.6,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();

        ctx.restore();

    }

    // ==========================
    // Earth
    // ==========================

    const earth = drawEarth();

    // ==========================
    // Moon
    // ==========================

    drawMoon();

    // ==========================
    // Animals
    // ==========================

    drawAnimals(earth.x, earth.y);

    // ==========================
    // Spark
    // ==========================

    drawSpark();

    requestAnimationFrame(draw);

}

draw();
// ==========================================
// SCRIPT PART 5
// Popup + Loading + Buttons
// ==========================================

// ==========================
// Loading
// ==========================

window.addEventListener("load", () => {

    const loading = document.getElementById("loading");

    if (loading) {

        setTimeout(() => {

            loading.style.opacity = "0";

            setTimeout(() => {

                loading.style.display = "none";

            }, 800);

        }, 1800);

    }

});

// ==========================
// Popup sau 45 giây
// ==========================

setTimeout(() => {

    const popup = document.getElementById("proposal");

    if (popup) {

        popup.style.display = "flex";

    }

}, 45000);

// ==========================
// Button YES
// ==========================

const yes = document.getElementById("yes");

if (yes) {

    yes.onclick = () => {

        alert("💖 Từ nay Huyền là người yêu của Tú nhé ❤️");

    };

}

// ==========================
// Button NO chạy trốn
// ==========================

const no = document.getElementById("no");

if (no) {

    no.addEventListener("mouseenter", () => {

        no.style.position = "fixed";

        no.style.left =
            Math.random() * (window.innerWidth - 150) + "px";

        no.style.top =
            Math.random() * (window.innerHeight - 80) + "px";

    });
