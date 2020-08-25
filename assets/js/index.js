(() => {

    const diceButton = document.querySelector(".rollDice");

    const dice1 = document.querySelector(".dice1");

    const dice2 = document.querySelector(".dice2");

     //Randomize number 1 - 6

    const randomNumber = () => {
        let randomNumber = Math.floor((Math.random() * 6) + 1);
        
        return randomNumber;
    };


    diceButton.addEventListener("click", () => {

        var diceRoll1 = randomNumber();

        var diceRoll2 = randomNumber();
        //Change images of the dice.
        dice1.setAttribute("src", "./assets/images/dice"+ diceRoll1 + ".png");

        dice2.setAttribute("src", "./assets/images/dice"+ diceRoll2 + ".png");

        let header = document.querySelector(".heading");

        const resetHeader = () => {setTimeout(() => {
      
            header.textContent = "Roll The Dice";
      
        },4000);
    };

        if (diceRoll1 === diceRoll2) {
            header.textContent = "Draw!";
            resetHeader();
        } else if (diceRoll1 > diceRoll2) {
            header.textContent = "Player 1 Wins!";
            resetHeader();
        } else if (diceRoll2 > diceRoll1) {
            header.textContent = "Player 2 Wins!";
            resetHeader();
        };
    });
})();
