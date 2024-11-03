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




//Slider//
var leftbutton = document.getElementById("leftbutton")
var rightbutton =document.getElementById("rightbutton")
var sliderimage= document.getElementById("banner24")
var slidermargin=0


rightbutton.addEventListener("click",

function(){
    slidermargin=slidermargin+100

    if(slidermargin>200)
    {
        slidermargin=0
        sliderimage.style.marginLeft=0;
    }
    else{
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
}
)

leftbutton.addEventListener("click",

function(){

    if(slidermargin==0)
    {
       
        slidermargin=200
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
    else{

        slidermargin=slidermargin-100
        sliderimage.style.marginLeft="-"+slidermargin+"vw";
    }
}
)
