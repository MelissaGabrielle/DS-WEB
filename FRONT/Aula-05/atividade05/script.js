const rato = document.getElementById("area");
const msg = document.getElementById("mensagem");
const emoji = document.getElementById("rato-emoji");

// Quando o mouse encosta na área (O rato foge)
rato.addEventListener("mouseenter", function() {
    // Muda o emoji para um rato correndo
    emoji.textContent = "💨";
    msg.textContent = "Tchau!";

    // Calcula nova posição aleatória
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);

    setTimeout(() => {//settar (definir o novo lugar)
        rato.style.left = x + "px";
        rato.style.top = y + "px";
    }, 200);//milisegundos
});

// E Quando o mouse Sai da área (Ele volta ao normal)
rato.addEventListener("mouseleave", function() {
    emoji.textContent = "🐭";
});

// Se o jogador conseguir clicar no rato
rato.addEventListener("click", function() {
    emoji.textContent = "🧀"; // Ganhou um queijo!
    msg.textContent = "PEGOU!";
    
    
    // Se ele conseguir pegar o queijo, ele vai ganhar o jogo então: 
    setTimeout(() => {
        alert("Parabéns! Você capturou o rato e deu um queijo para ele!");
    }, 150);
});