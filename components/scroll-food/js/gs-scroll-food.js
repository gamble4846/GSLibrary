var container = document.getElementById("gs-scroll-food-container");
var pages = container.children[0].children;
var noOfPages = container.children[0].children.length;
var scrollValuePerPage = 2000;
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
    for (let index = 0; index < pages.length; index++) {
        const page = pages[index];
        if(index * scrollValuePerPage <= totalScroll){
            for (let index2 = 0; index2 < pages.length; index2++) {
                const page2 = pages[index2];
                page2.classList.remove("gs-active");
            }
            page.classList.add("gs-active");
        }
    }
}