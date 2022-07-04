var container = document.getElementById("body-container-JLP");
var innerContainer = document.getElementById("body-inner-conainer-JLP");
var fixedItemContaciner = document.getElementById("fixed-item-body-container");

var pages = container.children[0].children;
var noOfPages = container.children[0].children.length;
var scrollValuePerPage = 200;
var totalScroll = 0;

container.addEventListener("wheel", event => {
    if(totalScroll >= 0){
        if(totalScroll <= noOfPages * scrollValuePerPage){
            totalScroll += event.deltaY;
            updatePage();
        }
        else{
            totalScroll = noOfPages * scrollValuePerPage;
        }
    }
    else{
        totalScroll = 0;
    }
});

updatePage();

function updatePage(){
    for (let index = 1; index < pages.length + 1; index++) {
        const page = pages[index - 1];
        const pageTargetClass = page.getAttribute("data-target-class");
        let maxScroll = index * scrollValuePerPage;
        let minScroll = (index * scrollValuePerPage) - scrollValuePerPage;
        if(totalScroll < maxScroll && totalScroll > minScroll){
            removeAllPages();
            innerContainer.classList.add(pageTargetClass);
            fixedItemContaciner.classList.add(pageTargetClass);
        }
    }
}

function removeAllPages(){
    for (let index = 0; index < pages.length; index++) {
        const pageTargetClass = pages[index].getAttribute("data-target-class");
        innerContainer.classList.remove(pageTargetClass);
        fixedItemContaciner.classList.remove(pageTargetClass);
    }
}

function updatePageFromMenuClick(pageCount){
    totalScroll = (pageCount * scrollValuePerPage) - (scrollValuePerPage/2);
    updatePage();
}