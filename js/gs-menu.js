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