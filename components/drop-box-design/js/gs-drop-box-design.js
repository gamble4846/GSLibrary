function updateSearchTextBox(flag){
    var container = document.getElementById("gs-dropbox-navbar-right-search-container");
    if(flag){
        container.classList.add("active");
    }
    else{
        container.classList.remove("active");
    }
}

function toggleRightMenu() {
    var rightPanel = document.getElementById("gs-dropbox-right");
    rightPanel.classList.toggle("open");
}