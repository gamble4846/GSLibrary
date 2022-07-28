function updateSearchTextBox(flag){
    var container = document.getElementById("gs-dropbox-navbar-right-search-container");
    var searchModal = document.getElementById("gs-dropbox-search-modal");
    if(flag){
        container.classList.add("active");
        searchModal.classList.add("open");
    }
    else{
        container.classList.remove("active");
        searchModal.classList.remove("open");
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

function openRightMenuWithSection(element){
    var container = element.parentElement.parentElement.parentElement;
    container.classList.add("open");

    var rightPanel = document.getElementById("gs-dropbox-right");
    rightPanel.classList.add("open");
}

function toggleLeftMenu(){
    var leftmenu = document.getElementById("gs-dropbox-left");
    leftmenu.classList.toggle("open");
}