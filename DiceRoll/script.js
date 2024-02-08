
function rollDice(){
    const numDice = document.getElementById("input").value;
    const diceResult = document.getElementById("diceResult");
    const diceImg = document.getElementById("diceImg");
    let sum = 0;

    const values = [];
    const imgs = [];

    for(let i = 1; i <= numDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        console.log(value);
        imgs.push(`<img src="img/Dice${value}.png" alt="Dice ${value}" width="100">`);
        sum += value;
    }

    diceResult.textContent = `dice: ${values.join(", ")}`;
    diceImg.innerHTML = imgs.join(" ");
    diceResult.textContent += ` sum: ${sum}`;
}