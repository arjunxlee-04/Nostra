var icon=document.getElementById("icon")
var offerbar=document.querySelector(".offerbar")
offerbar.addEventListener("click",function(){
    offerbar.style.display="none"
})

//Side Navbar//
var sideNavMenu=document.getElementById("menubars")
var sidenavbar=document.querySelector(".sidenavbar")
sideNavMenu.addEventListener("click",function(){
    sidenavbar.style.marginLeft="0px"
})

document.getElementById("sidenavbar-close").addEventListener("click",()=>{
    document.querySelector(".sidenavbar").style.marginLeft="-60%"
})
