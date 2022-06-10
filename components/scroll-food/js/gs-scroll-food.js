var container = document.getElementById("gs-scroll-food-container");
var pageLinks = document.getElementsByClassName("gs-page-number");
var pageDivs = document.getElementsByClassName("gs-page");
var circleTopRights = document.getElementsByClassName("gs-circle-top-right");
var circleBottomLefts = document.getElementsByClassName("gs-circle-bottom-left");
var pageDataTitles = document.getElementsByClassName("gs-page-data-title-container");
var goLeftButtons = document.querySelectorAll(".gs-scroll-food-outside-container .gs-scroll-food-container .gs-pages-container .gs-page .gs-page-contents .gs-circle-bottom-left .gs-circle-arrow-container .gs-circle-arrow");
var goRightButtons = document.querySelectorAll(".gs-scroll-food-outside-container .gs-scroll-food-container .gs-pages-container .gs-page .gs-page-contents .gs-circle-top-right .gs-circle-arrow-container .gs-circle-arrow");

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

for (let index = 0; index < goLeftButtons.length; index++) {
    const goLeftButton = goLeftButtons[index];
    const goRightButton = goRightButtons[index];
    goLeftButton.addEventListener("click", function(){
        if(totalScroll >= 0)
            totalScroll -= scrollValuePerPage;
        if(totalScroll < 0)
            totalScroll = 0;

        updatePage();
    });

    goRightButton.addEventListener("click", function(){
        if(totalScroll < noOfPages * scrollValuePerPage)
            totalScroll += scrollValuePerPage;
        if(totalScroll >= noOfPages * scrollValuePerPage)
            totalScroll = (noOfPages * scrollValuePerPage) - (scrollValuePerPage);
        
        updatePage();
    });
}

for (let index = 0; index < pageDataTitles.length; index++) {
    const pageDataTitle = pageDataTitles[index];
    let differentAccent = pageDataTitles[index].getAttribute("data-accent-for-two").split(",");
    let titleData = pageDataTitles[index].innerHTML.trim();
    pageDataTitles[index].innerHTML = "";
    for (let index2 = 0; index2 < titleData.length; index2++) {
        const titleLetter = titleData[index2];

        const letterDiv = document.createElement("div");
        letterDiv.innerHTML = titleLetter;
        letterDiv.classList.add("gs-title-letter");
        letterDiv.style.color = pageDataTitles[index].getAttribute("data-accent-one");
        letterDiv.style.textShadow = "0.5vw 0 " + pageDataTitles[index].getAttribute("data-accent-one");

        for (let index3 = 0; index3 < differentAccent.length; index3++) {
            const element = differentAccent[index3];
            if(parseInt(element) - 1 == index2){
                letterDiv.style.color = pageDataTitles[index].getAttribute("data-accent-two");
                letterDiv.style.textShadow = "0.5vw 0 " + pageDataTitles[index].getAttribute("data-accent-two");
            }
        }

        pageDataTitles[index].appendChild(letterDiv);
    }
}

updatePage();

function updatePage(){
    for (let index = 0; index < pages.length; index++) {
        const page = pages[index];
        const pageLink = pageLinks[index];
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

            for (let index = 0; index < circleBottomLefts.length; index++) {
                const circleBottomLeft = circleBottomLefts[index];
                circleBottomLeft.style.backgroundColor = pageDivs[index].getAttribute("data-accent-two");
                // circleBottomLeft.classList.add("gs-opp-0");
                // setTimeout(function(){
                //     circleBottomLeft.classList.remove("gs-opp-0");
                // }, 300);                
            }

            for (let index = 0; index < circleTopRights.length; index++) {
                const circleTopRight = circleTopRights[index];
                circleTopRight.style.backgroundColor = pageDivs[index].getAttribute("data-accent-three");
                // circleTopRight.classList.add("gs-opp-0");
                // setTimeout(function(){
                //     circleTopRight.classList.remove("gs-opp-0");
                // }, 300);
            }
            
        }
    }
}


//------Swiping------------
container.addEventListener('touchstart', handleTouchStart, false);        
container.addEventListener('touchmove', handleTouchMove, false);

var xDown = null;                                                        
var yDown = null;

function getTouches(evt) {
  return evt.touches ||             // browser API
         evt.originalEvent.touches; // jQuery
}                                                     
                                                                         
function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];                                      
    xDown = firstTouch.clientX;                                      
    yDown = firstTouch.clientY;                                      
};                                                
                                                                         
function handleTouchMove(evt) {
    if ( ! xDown || ! yDown ) {
        return;
    }

    var xUp = evt.touches[0].clientX;                                    
    var yUp = evt.touches[0].clientY;

    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
                                                                         
    if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
        if ( xDiff > 0 ) {
            if(totalScroll < noOfPages * scrollValuePerPage)
                totalScroll += scrollValuePerPage;
            if(totalScroll == noOfPages * scrollValuePerPage)
                totalScroll = (noOfPages * scrollValuePerPage) - (scrollValuePerPage)
        } else {
            if(totalScroll >= 0)
                totalScroll -= scrollValuePerPage;
            if(totalScroll < 0)
                totalScroll = 0;
        }
        updatePage();                
    } else {
        if ( yDiff > 0 ) {
            /* down swipe */ 
        } else { 
            /* up swipe */
        }                                                                 
    }
    /* reset values */
    xDown = null;
    yDown = null;                                
};