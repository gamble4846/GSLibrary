var allCards = document.getElementsByClassName("gs-product-card-save");

for (var i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', function(){
        var classList = this.classList.value;
        if(classList.includes("gs-saved")){
            this.classList.remove("gs-saved");
        }
        else{
            this.classList.add("gs-saved");
        }
    });
}