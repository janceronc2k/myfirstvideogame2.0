let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let coin2 = document.querySelector(".coin2");
let coin3 = document.querySelector(".coin3");
let coin4 = document.querySelector(".coin4");
let coin5 = document.querySelector(".coin5");
let coin6 = document.querySelector(".coin6");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

flipBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * 2);
    coin.style.animation = "none";
    let q = Math.floor(Math.random() * 2);
    coin2.style.animation = "none";
    let z = Math.floor(Math.random() * 2);
    coin3.style.animation = "none";
    let a = Math.floor(Math.random() * 2);
    coin4.style.animation = "none";
    let b = Math.floor(Math.random() * 2);
    coin5.style.animation = "none";
    let c = Math.floor(Math.random() * 2);
    coin6.style.animation = "none";
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
    if(a){
        setTimeout(function(){
            coin4.style.animation = "spin-heads 3s forwards";
            
        }, 100);
        heads3=1;
        
    }
    else{
        setTimeout(function(){
            coin4.style.animation = "spin-tails 3s forwards";
            
        }, 100);
        tails3=1;
        
    }
    if(b){
        setTimeout(function(){
            coin5.style.animation = "spin-heads 3s forwards";
            
        }, 100);
        heads3=1;
        
    }
    else{
        setTimeout(function(){
            coin5.style.animation = "spin-tails 3s forwards";
            
        }, 100);
        tails3=1;
        
    }
    if(c){
        setTimeout(function(){
            coin6.style.animation = "spin-heads 3s forwards";
            
        }, 100);
        heads3=1;
        
    }
    else{
        setTimeout(function(){
            coin6.style.animation = "spin-tails 3s forwards";
            
        }, 100);
        tails3=1;
        
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
    coin2.style.animation ="none";
    coin3.style.animation = "none";
    coin4.style.animation = "none";
    coin5.style.animation = "none";
    coin6.style.animation = "none";
    heads = 0;
    tails = 0;
    updateStats();
});