let autoClickInterval;
let autoClickPrice = 5;

function incrementScore() {
  const scoreElement = document.getElementById("score");
  let score = parseInt(scoreElement.innerHTML);
  score += 1;
  scoreElement.innerHTML = score;
}

function startAutoClick() {
  const scoreElement = document.getElementById("score");
  let score = parseInt(scoreElement.innerHTML);
  if (score >= autoClickPrice) {
    score -= autoClickPrice;
    scoreElement.innerHTML = score;
    autoClickPrice *= 2;
    document.querySelector(".auto-click-price").innerHTML = autoClickPrice;
    clearInterval(autoClickInterval);
    autoClickInterval = setInterval(incrementScore, 1000);
  }
}

document.querySelector(".auto-click-price").innerHTML = autoClickPrice;
