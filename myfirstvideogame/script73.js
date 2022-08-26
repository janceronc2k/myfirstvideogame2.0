let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let coin2 = document.querySelector(".coin2");
let coin3 = document.querySelector(".coin3");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    let q = Math.floor(Math.random() * 2);
    coin2.style.animation = "none";
    let z = Math.floor(Math.random() * 2);
    coin3.style.animation = "none";
    if(i){
        setTimeout(function(){
            coin.style.animation = "spin-heads 3s forwards";
            
        }, 100);
        heads=1;
        
    }
    else{
        setTimeout(function(){
            coin.style.animation = "spin-tails 3s forwards";
            
        }, 100);
        tails=1;
        
    }
    if(q){
        setTimeout(function(){
            coin2.style.animation = "spin-heads 3s forwards";
            
        }, 100);
        heads2=1;
        
    }
    else{
        setTimeout(function(){
            coin2.style.animation = "spin-tails 3s forwards";
            
        }, 100);
        tails2=1;
        
    }
    if(z){
        setTimeout(function(){
            coin3.style.animation = "spin-heads 3s forwards";
            
        }, 100);
        heads3=1;
        
    }
    else{
        setTimeout(function(){
            coin3.style.animation = "spin-tails 3s forwards";
            
        }, 100);
        tails3=1;
        
    }
    setTimeout(updateStats, 3000);
    disableButton();
    if((heads=1)&&(heads2=1)&&(tails3=1)){
        alert("Player 3 is the winner");
    }
    elseif((tails=1)&&(tails2=1)&&(heads3=1))
    {
        alert("Player 3 is the winner");
    }

});



function disableButton(){
    flipBtn.disabled = true;
    setTimeout(function(){
        flipBtn.disabled = false;
    },3000);
}
resetBtn.addEventListener("click",() => {
    coin.style.animation = "none";
    coin2.style.animation ="";
    coin3.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});