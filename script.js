// Create floating flowers in the background
for(let i=0;i<15;i++){
  const flower = document.createElement("div");
  flower.classList.add("flower");
  flower.style.left = Math.random() * 100 + "vw";
  flower.style.animationDuration = (Math.random()*5+8) + "s";
  document.body.appendChild(flower);
}



const noBtn = document.getElementById("no");
const yesBtn = document.getElementById("yes");
const msg = document.getElementById("message");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  msg.innerHTML = "Yayyy 💖 i love you TAM'S 😍<br>Happy Valentine’s 💌";
});
yesBtn.addEventListener("click", () => {
  msg.innerHTML = "Yayyy 💖 I love you TAM'S😍<br>Happy Valentine’s 💌";

  // Floating hearts
  createHearts(20);

  // Balloons
  const balloonsContainer = document.querySelector(".balloons");
  for(let i=0;i<15;i++){
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random()*90 + "vw";
    balloon.style.animationDuration = (Math.random()*2+3) + "s";
    balloon.style.background = `radial-gradient(circle at 30% 30%, ${getRandomColor()}, ${getRandomColor()})`;
    balloonsContainer.appendChild(balloon);
    setTimeout(()=> balloon.remove(), 4000);
  }
});

// Helper for random colors
function getRandomColor(){
  const colors = ["#ff4d6d","#ff416c","#ff7eb3","#ff758f","#ff9a9e","#ffb6c1"];
  return colors[Math.floor(Math.random()*colors.length)];
}
yesBtn.addEventListener("click", () => {
  msg.innerHTML = "Yayyy 💖 I knew it 😍<br>Happy Valentine’s 💌";

  createHearts(20);
  createBalloons(15);
  createSparkles(25);
});

// Sparkles function
function createSparkles(num){
  const container = document.querySelector(".sparkles");
  for(let i=0;i<num;i++){
    const sparkle = document.createElement("div");
    sparkle.classList.add("sparkle");
    sparkle.style.left = Math.random()*100 + "%";
    sparkle.style.top = Math.random()*100 + "%";
    container.appendChild(sparkle);
    setTimeout(()=> sparkle.remove(), 1000);
  }
}

// Balloons function
function createBalloons(num){
  const balloonsContainer = document.querySelector(".balloons");
  for(let i=0;i<num;i++){
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random()*90 + "vw";
    balloon.style.animationDuration = (Math.random()*2+3) + "s";
    balloon.style.background = `radial-gradient(circle at 30% 30%, ${getRandomColor()}, ${getRandomColor()})`;
    balloonsContainer.appendChild(balloon);
    setTimeout(()=> balloon.remove(), 4000);
  }
}
