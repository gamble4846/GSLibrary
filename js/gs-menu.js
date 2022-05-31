function gs_openMenu(ele){
    let mobileMenuId = ele.getAttribute("data-mobile-div");
    let mobileMenuEle = document.getElementById(mobileMenuId);
    let mobileMenuClasses = mobileMenuEle.getAttribute("class");
    if(mobileMenuClasses.includes("gs-open")){
        mobileMenuEle.classList.remove("gs-open");
    }
    else{
        mobileMenuEle.classList.add("gs-open");
    }
}

function gs_closeMenu(ele){
    let mobileMenuEle = ele.parentElement;
    mobileMenuEle.classList.remove("gs-open");
}

window.onload = function() {
    let menuLinks = document.querySelectorAll('.gs-menu-link-with-active');

    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', function handleClick(event) {
            let oldActive = document.querySelector('.gs-menu-link-with-active.gs-menu-active');
            oldActive.classList.remove("gs-menu-active");

            menuLink.classList.add("gs-menu-active");
        });
    });
};