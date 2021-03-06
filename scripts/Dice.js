function rollDice(){
    //Variable declaration
    var start_bet = document.forms["inputs"]["startMoney"].value;
    var rolls = 0;
    var money=start_bet;
    var max_money = start_bet;
    var max_money_roll = 0;
    var dice1;
    var dice2;
    var unhide = document.getElementById("results");
    
    //Error checking
    //Less than 0
    if(start_bet <= 0){
        alert("Please enter a value greater than 0");
        return false;
    }
    
    //Game cycle
    while(money > 0){
        dice1= Math.floor(Math.random() * 6) + 1;
        dice2 = Math.floor(Math.random() * 6) + 1;
        rolls++;
        if(dice1+dice2==7){
            money+=4;
            if(max_money < money){
                max_money=money;
                max_money_roll = rolls;
            }
        }
        else{
            money--;
        }
    }
    //Unhides the results table and sets the values
    unhide.style.display="inline-block";
    document.getElementById("start").innerText = "$" + start_bet;
    document.getElementById("total").innerText = rolls;
    document.getElementById("highest").innerText = "$" + max_money;
    document.getElementById("roll").innerText = max_money_roll;
}

function checkSubmit(event){
    if(event && event.keyCode == 13){
        rollDice();
        return false;
    }
}