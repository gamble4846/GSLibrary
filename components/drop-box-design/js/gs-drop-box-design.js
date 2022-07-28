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

function openFile(){
    var fileModel = document.getElementById("gs-dropbox-file-model");
    fileModel.classList.add("open");
}

function closeFile(){
    var fileModel = document.getElementById("gs-dropbox-file-model");
    fileModel.classList.remove("open");
}

function showRightClickMenu(event){
    var rightClickMenu = document.getElementById("gs-drop-box-right-click-menu");

    
    var _docHeight = (document.height !== undefined) ? document.height : document.body.offsetHeight;
    var _docWidth = (document.width !== undefined) ? document.width : document.body.offsetWidth;

    rightClickMenu.classList.add("open");
    var rightClickMenuWidth = 200;
    rightClickMenu.style.top = event.clientY + "px";
    

    if((_docWidth - event.clientX) < (rightClickMenuWidth + 20)){
        rightClickMenu.style.right = _docWidth - event.clientX + "px";
        rightClickMenu.style.left = "auto";
        console.log(rightClickMenu.style.right);
    }
    else{
        rightClickMenu.style.right = "auto";
        rightClickMenu.style.left = event.clientX + "px";
    }

    rightClickMenu.style.maxHeight = (_docHeight - event.clientY - 20) + "px";
}

function fullDocumentClick(event){
    var rightClickMenu = document.getElementById("gs-drop-box-right-click-menu");
    if(!rightClickMenu.contains(event.target)){
        rightClickMenu.classList.remove("open");
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    var rightClickElements = document.getElementsByClassName("allowRightClick");
    console.log(rightClickElements);
    for (let index = 0; index < rightClickElements.length; index++) {
        const rightClickElement = rightClickElements[index];
        rightClickElement.addEventListener("contextmenu", showRightClickMenu);
    }

    document.addEventListener("click", fullDocumentClick);
});