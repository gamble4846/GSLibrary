var allCards = document.getElementsByClassName("gs-card");

for (var i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('mouseover', changeBluredCard, false);
    allCards[i].addEventListener('mouseout', changeBluredCard, false);
}

function changeBluredCard(){
    let flag = true;
    for (var i = 0; i < allCards.length; i++) {
        if(allCards[i].matches(':hover')){
            flag = false;
            allCards[i].classList.remove("gs-card-blured");
        }
        else{
            allCards[i].classList.add("gs-card-blured");
        }
    }

    if(flag){
        for (var i = 0; i < allCards.length; i++) {
            allCards[i].classList.remove("gs-card-blured");
        }
    }
}