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

function openThisRightPanel(section){
    const allSections = document.getElementsByClassName("rightPanelSectionContainer");

    for (let index = 0; index < allSections.length; index++) {
        const section = allSections[index];
        section.classList.remove("open");
    }

    section.classList.add("open");
}