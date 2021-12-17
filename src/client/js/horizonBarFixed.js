function fixNaviBar(event){
    event.preventDefault();
    document.addEventListener('scroll', ()=>{
        var navbar= document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky){
            navbar.classList.add("sticky");
        }else {
            navbar.classList.remove("sticky");
        }
    })
}

export {
    fixNaviBar
}