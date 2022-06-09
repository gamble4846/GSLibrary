var container = document.getElementById("gs-scroll-food-container");
var pageLinks = document.getElementsByClassName("gs-page-number");
var pageDivs = document.getElementsByClassName("gs-page");
var circleTopRight = document.getElementsByClassName("gs-circle-top-right")[0];
var circleBottomLeft = document.getElementsByClassName("gs-circle-bottom-left")[0];
var pages = container.children[0].children;
var noOfPages = container.children[0].children.length;
var scrollValuePerPage = 300;
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

for (let index = 0; index < pageLinks.length; index++) {
    const pageLink = pageLinks[index];
    pageLink.addEventListener("click", function (){
        for (let index2 = 0; index2 < pageLinks.length; index2++) {
            const pageLinks2 = pageLinks[index2];
            pageLinks2.classList.remove("gs-active");
        }
        totalScroll = parseInt(pageLink.getAttribute("data-target")) * scrollValuePerPage - 100;
        updatePage();
        pageLink.classList.add("gs-active");
    });
}

updatePage();

function updatePage(){
    for (let index = 0; index < pages.length; index++) {
        const page = pages[index];
        const pageLink = pageLinks[index];
        let accentOne = pageDivs[index].getAttribute("data-accent-one");
        let accentTwo = pageDivs[index].getAttribute("data-accent-two");
        let accentThree = pageDivs[index].getAttribute("data-accent-three");
        if(index * scrollValuePerPage <= totalScroll){
            for (let index2 = 0; index2 < pages.length; index2++) {
                const page2 = pages[index2];
                const pageLinks2 = pageLinks[index2];
                page2.classList.remove("gs-active");
                pageLinks2.classList.remove("gs-active");
            }
            page.classList.add("gs-active");
            pageLink.classList.add("gs-active");

            pageDivs[index].style.backgroundColor = pageDivs[index].getAttribute("data-accent-one");
            circleBottomLeft.style.backgroundColor = pageDivs[index].getAttribute("data-accent-two");
            circleTopRight.style.backgroundColor = pageDivs[index].getAttribute("data-accent-three");
        }
    }
}