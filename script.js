let playerScore = 0;
let aiScore = 0;
let shuttlecockSpeed = 2;
let shuttlecockDirection = 1; // 1 for right, -1 for left
let gameInterval;
let shuttlecockElement = document.getElementById('shuttlecock');
let playerElement = document.getElementById('player');
let aiElement = document.getElementById('ai');

function startGame() {
    document.getElementById('start-button').style.display = 'none';
    resetGame();
    gameInterval = setInterval(updateGame, 20);
}

function resetGame() {
    playerScore = 0;
    aiScore = 0;
    shuttlecockElement.style.left = '295px';
    shuttlecockElement.style.top = '195px';
    updateScore();
}

function updateGame() {
    // Move the shuttlecock
    let shuttlecockLeft = parseInt(shuttlecockElement.style.left);
    let shuttlecockTop = parseInt(shuttlecockElement.style.top);
    
    // Check for collision with paddles
    if (shuttlecockLeft <= 10 && shuttlecockTop >= parseInt(playerElement.style.bottom) && shuttlecockTop <= parseInt(playerElement.style.bottom) + 100) {
        shuttlecockDirection = 1; // Player hits the shuttlecock
    } else if (shuttlecockLeft >= 580 && shuttlecockTop >= parseInt(aiElement.style.bottom) && shuttlecockTop <= parseInt(aiElement.style.bottom) + 100) {
        shuttlecockDirection = -1; // AI hits the shuttlecock
    } else if (shuttlecockLeft <= 0) {
        aiScore++;
        resetShuttlecock();
    } else if (shuttlecockLeft >= 600) {
        playerScore++;
        resetShuttlecock();
    } 

    shuttlecockLeft += shuttlecockSpeed * shuttlecockDirection;
    shuttlecockElement.style.left
