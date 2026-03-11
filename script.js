let surpriseCount = 0;
let discoCount = 0;
let usesRemaining = 10;

function buttonClick(type){

    if(usesRemaining <= 0){
        return;
    }

    if(type === "surprise"){
        surpriseCount++;
        document.getElementById("surpriseBox").textContent = surpriseCount;
    }
    else{
        discoCount++;
        document.getElementById("discoBox").textContent = discoCount;
    }

    usesRemaining--;
    document.getElementById("usesBox").textContent = usesRemaining;
}
