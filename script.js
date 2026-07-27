
 vẫn bình thường mà 



mình có thấy chỗ nhập đâu 


 nhấn vào chỗ commit changes à  

 như vầy rồi nhấn commit changes phải không

nhấn nút gì? 


làm sao nữa 

 làm sao nữa 

 Dán file HTML mới vào gửi mình file HTML đi 

như vầy phải không

chỗ 327 à 


Văn bản đã dán (1).txt
Tài liệu
không đúng rồi , bạn coi mình sai khúc nào vậy 

nè 


Văn bản đã dán (1)(1).txt
Tài liệu
cứ sửa từng cái cho mình đi 


Văn bản đã dán (1)(2).txt
Tài liệu
tớ làm k có được :((( bị sao vậy chỉ tớ thật chi tiết đi 

ý là mình đang làm cái bảng note á , như vầy nè rồi làm sao có nhạc ây

làm gì nữa 

Hôm qua 10:24
4dfa968d-a607-4e4d-9589-88a17c9e8688.png
0ce24f46-fdf9-4375-ae31-e8280983fb6e.png
 nhạc mình tải nè mà k có lên được 


Hôm nay 12:40

Văn bản đã dán (1)(3).txt
Tài liệu
Mình làm sai khúc nào sao :(( chỉ giúp mình với . Mình chạy được phần mềm rồi 

Tớ chạy đc vầy rồi , cậu chỉ tớ sửa code đi 


Văn bản đã dán (1)(4).txt
Tài liệu
mình kiếm k ra bước 5 


Văn bản đã dán (1)(5).txt
Tài liệu
như vầy đúng không , đúng thì hướng dẫn mình tiếp nhé 

2db991ea-5eb5-450c-a84b-34a6af03d6a7.png
791c2816-24d9-4b8f-9f8f-66fabfe34bd3.png
nè , xem xong bạn hướng dẫn mình tiếp nhé 

 mình mới thêm file nhạc vào rồi nè 

 mình đang để nhạc là vậy đấy

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

}
// =====================================
// SCRIPT PART 2
// Địa cầu - Mặt trăng
// =====================================

// Quỹ đạo

let orbitAngle = 0;
let earthRotation = 0;
let animalAngle = 0;

// =====================
// Sao trên địa cầu
// =====================

const earthStars = [];

for (let i = 0; i < 1500; i++) {

    const angle = Math.random() * Math.PI * 2;
    const radius = Math.sqrt(Math.random()) * 130;

    earthStars.push({

        x: Math.cos(angle) * radius,

        y: Math.sin(angle) * radius,

        size: Math.random() * 2 + 0.5,

        alpha: Math.random()

    });

}

// =====================
// Vẽ địa cầu
// =====================

function drawEarth() {

    orbitAngle += 0.01;
    earthRotation += 0.01;

    const cx = canvas.width / 2 + Math.cos(orbitAngle) * 220;
    const cy = canvas.height / 2 + Math.sin(orbitAngle) * 220;

    // Glow

    const glow = ctx.createRadialGradient(

        cx, cy, 20,

        cx, cy, 220

    );

    glow.addColorStop(0, "rgba(90,230,255,.45)");
    glow.addColorStop(1, "rgba(0,0,0,0)");

    ctx.beginPath();
    ctx.fillStyle = glow;
    ctx.arc(cx, cy, 220, 0, Math.PI * 2);
    ctx.fill();

    // Đại dương

    const ocean = ctx.createRadialGradient(

        cx - 35,

        cy - 35,

        20,

        cx,

        cy,

        130

    );

    ocean.addColorStop(0, "#8cf5ff");
    ocean.addColorStop(.3, "#4ab6ff");
    ocean.addColorStop(.7, "#0d61af");
    ocean.addColorStop(1, "#00194a");

    ctx.beginPath();
    ctx.fillStyle = ocean;
    ctx.arc(cx, cy, 130, 0, Math.PI * 2);
    ctx.fill();

    // Lục địa

    ctx.save();

    ctx.translate(cx, cy);

    ctx.rotate(earthRotation);

    ctx.fillStyle = "rgba(40,180,80,.85)";

    ctx.beginPath();
    ctx.moveTo(-45,-30);
    ctx.bezierCurveTo(-10,-55,25,-40,8,-5);
    ctx.bezierCurveTo(25,20,-10,35,-35,15);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(30,15);
    ctx.bezierCurveTo(55,25,45,55,18,45);
    ctx.bezierCurveTo(5,25,10,10,30,15);
    ctx.closePath();
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(-70,0);
    ctx.bezierCurveTo(-90,10,-75,40,-45,35);
    ctx.bezierCurveTo(-30,15,-40,-5,-70,0);
    ctx.closePath();
    ctx.fill();

    ctx.restore();

    // Sao phát sáng

    for (const s of earthStars) {

        const rx =
            s.x * Math.cos(earthRotation) -
            s.y * Math.sin(earthRotation);

        const ry =
            s.x * Math.sin(earthRotation) +
            s.y * Math.cos(earthRotation);

        ctx.beginPath();

        ctx.fillStyle = rgba(170,255,255,${s.alpha});

        ctx.arc(

            cx + rx,

            cy + ry,

            s.size,

            0,

            Math.PI * 2

        );

        ctx.fill();

    }

    return {

        x: cx,

        y: cy

    };

}

// =====================
// Mặt trăng
// =====================

function drawMoon() {

    const moonX =
        canvas.width / 2 +
        Math.cos(orbitAngle + 1.8) * 320;

    const moonY =
        canvas.height / 2 +
        Math.sin(orbitAngle + 1.8) * 320;

    const glow = ctx.createRadialGradient(

        moonX,

        moonY,

        5,

        moonX,

        moonY,

        55

    );

    glow.addColorStop(0, "rgba(255,255,220,.9)");
    glow.addColorStop(1, "rgba(255,255,220,0)");

    ctx.beginPath();
    ctx.fillStyle = glow;
    ctx.arc(moonX, moonY, 55, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "#f3f3f3";
    ctx.arc(moonX, moonY, 32, 0, Math.PI * 2);
    ctx.fill();

}
// =====================================
// SCRIPT PART 3
// Hai bé + Spark
// =====================================

// =====================
// Spark quanh trái tim
// =====================

const spark = [];

for (let i = 0; i < 180; i++) {

    spark.push({

        a: Math.random() * Math.PI * 2,

        r: Math.random() * 170,

        size: Math.random() * 3,

        alpha: Math.random()

    });

}

// =====================
// Hai bé nắm tay
// =====================

function drawAnimals(cx, cy) {

    animalAngle += 0.02;

    const runRadius = 55;

    const x = cx + Math.cos(animalAngle) * runRadius;
    const y = cy + Math.sin(animalAngle) * runRadius;

    // Nắm tay

    ctx.beginPath();
    ctx.strokeStyle = "#ffb6c1";
    ctx.lineWidth = 3;
    ctx.moveTo(x - 12, y);
    ctx.lineTo(x + 12, y);
    ctx.stroke();

    // Tim nhỏ

    ctx.font = "18px serif";
    ctx.fillText("💕", x - 8, y - 12);

    // Bé dê

    ctx.font = "32px serif";
    ctx.fillText("🐐", x - 30, y + 10);

    // Bé ngựa

    ctx.fillText("🐎", x + 10, y + 10);

}

// =====================
// Spark lấp lánh
// =====================

function drawSpark() {

    for (const s of spark) {

        const x =
            canvas.width / 2 +
            Math.cos(s.a) * s.r;

        const y =
            canvas.height / 2 +
            Math.sin(s.a) * s.r;

        ctx.beginPath();

        ctx.fillStyle =
        rgba(255,255,255,${s.alpha});

        ctx.arc(

            x,

            y,

            s.size,

            0,

            Math.PI * 2

        );

        ctx.fill();

        s.alpha += Math.random() * 0.05 - 0.025;

        if (s.alpha < 0.2) s.alpha = 0.2;

        if (s.alpha > 1) s.alpha = 1;

    }

}
