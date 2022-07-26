function updateSearchTextBox(flag){
    var container = document.getElementById("gs-dropbox-navbar-right-search-container");
    if(flag){
        container.classList.add("active");
    }
    else{
        container.classList.remove("active");
    }
}