var page_1 = document.getElementById("page1");
var page_2 = document.getElementById("page2");
var District1 = document.getElementById("North_District1");
var District2 = document.getElementById("District2");
var District3 = document.getElementById("District3");
var District4 = document.getElementById("District4");
var District5 = document.getElementById("District5");
var District6 = document.getElementById("District6");
var map = document.getElementById("map1")
var home_button = document.getElementById("page2_home");
var page_3 = document.getElementById("page3");
var page_4 = document.getElementById("page4");
var close_page = document.getElementById("close_b");
var open_page = document.getElementById("open_e");
var mulan_button = document.getElementById("close_button1");
var koemon_button = document.getElementById("close_button2");

var mulan_name = document.getElementById("mulan");
var mulan_hour = document.getElementById("mulan_hour");
var mulan_address = document.getElementById("mulan_address");
var mulan_pic = document.getElementById("mulan_pic");
var mulan_pic1 = document.getElementById("mulan_pic1");
var mulan_pic2 = document.getElementById("mulan_pic2");
var mulan_close = document.getElementById("mulan_close");
var mulan_plug = document.getElementById("mulan_plug");
var mulan_wifi = document.getElementById("mulan_wifi");
var mulan_paw = document.getElementById("mulan_paw");
var mulan_list = new Array(mulan_name, mulan_hour, mulan_address, mulan_pic, mulan_pic1, mulan_pic2, mulan_close, mulan_plug, mulan_wifi, mulan_paw, mulan_button);

var koemon_name = document.getElementById("koemon");
var koemon_hour = document.getElementById("koemon_hour");
var koemon_address = document.getElementById("koemon_address");
var koemon_pic = document.getElementById("koemon_pic");
var koemon_pic1 = document.getElementById("koemon_pic1");
var koemon_pic2 = document.getElementById("koemon_pic2");
var koemon_open = document.getElementById("koemon_open");
var koemon_plug = document.getElementById("koemon_plug");
var koemon_wifi = document.getElementById("koemon_wifi");
var koemon_paw = document.getElementById("koemon_paw");
var koemon_list = new Array(koemon_name, koemon_hour, koemon_address, koemon_pic, koemon_pic1, koemon_pic2, koemon_open, koemon_plug, koemon_wifi, koemon_paw, koemon_button)

var black = document.getElementById("blackline");
var white = document.getElementById("whiteline");

let display = true;
let page3_display = false;
let page4_display = false;
District1.addEventListener("mouseover", function(){
    map.src = "./pic/map2.png";
    this.src = "./pic/District1_change.png";
})
District2.addEventListener("mouseover", function(){
    map.src = "./pic/map3.png";
    this.src = "./pic/District2_change.png";
})
District3.addEventListener("mouseover", function(){
    map.src = "./pic/map4.png";
    this.src = "./pic/District3_change.png";
})
District4.addEventListener("mouseover", function(){
    map.src = "./pic/map5.png";
    this.src = "./pic/District4_change.png";
})
District5.addEventListener("mouseover", function(){
    map.src = "./pic/map6.png";
    this.src = "./pic/District5_change.png";
})
District6.addEventListener("mouseover", function(){
    map.src = "./pic/map7.png";
    this.src = "./pic/District6_change.png";
})
District1.addEventListener("mouseout", function(){
    map.src = "./pic/map1.png";
    this.src = "./pic/District1.png";
})
District2.addEventListener("mouseout", function(){
    map.src = "./pic/map1.png";
    this.src = "./pic/District2.png";
})
District3.addEventListener("mouseout", function(){
    map.src = "./pic/map1.png";
    this.src = "./pic/District3.png";
})
District4.addEventListener("mouseout", function(){
    map.src = "./pic/map1.png";
    this.src = "./pic/District4.png";
})
District5.addEventListener("mouseout", function(){
    map.src = "./pic/map1.png";
    this.src = "./pic/District5.png";
})
District6.addEventListener("mouseout", function(){
    map.src = "./pic/map1.png";
    this.src = "./pic/District6.png";
})

close_page.addEventListener("mouseover", function(){
    if(display == false  && page4_display == false && page3_display == false){
        page3_display = true;
        page_3.style = "background-color: rgba(151, 155, 155, 0.8)";
        page_3.style.zIndex ="2";
        black.style = "background-color: rgba(63, 68, 67, 1)";
        for (let i=0; i < mulan_list.length; i++){
            mulan_list[i].style = "opacity: 1; cursor: pointer";
        }
    }
})
open_page.addEventListener("mouseover", function(){
    if(display == false  && page3_display == false && page4_display == false){
        page4_display = true;
        page_4.style = "background-color: rgba(151, 155, 155, 0.8)";
        page_4.style.zIndex ="2";
        white.style = "background-color: rgba(229, 229, 229, 1)";
        for (let i=0; i < koemon_list.length; i++){
            koemon_list[i].style = "opacity: 1; cursor: pointer";
        }
    }
})

mulan_button.addEventListener("click", function(){
    if(page3_display == true){
        page3_display = false;
        page_3.style = "background-color: rgba(151, 155, 155, 0)";
        page_3.style.zIndex ="-1";
        black.style = "background-color: rgba(63, 68, 67, 0)";
        for (let i=0; i < mulan_list.length; i++){
            mulan_list[i].style = "opacity: 0; cursor: default";
        }
    }
})
koemon_button.addEventListener("click", function(){
    if(page4_display == true){
        page4_display = false;
        page_4.style = "background-color: rgba(240, 248, 255, 0)";
        page_4.style.zIndex ="-1";
        white.style = "background-color: rgba(229, 229, 229, 0)";
        for (let i=0; i < koemon_list.length; i++){
            koemon_list[i].style = "opacity: 0; cursor: default";
        }
    }
})
District1.addEventListener("click", function(){
    if(display == true){
        const style = {opacity: 0};
        page_1.animate(style, 1200);
        setTimeout(function(){
            page_1.style= "opacity: 0";
        },1200);
        const style2 = {opacity: 1};
        page_2.animate(style2, 1200);
        setTimeout(function(){
            page_2.style = "opacity: 1";
        },1200);
        this.style = "cursor: default";
        home_button.style = "cursor: pointer";
        display = !display;
    }
})
home_button.addEventListener("click", function(){
    if(display == false && page3_display == false && page4_display == false){
        const style = {opacity: 0};
        page_2.animate(style, 1200);
        setTimeout(function(){
            page_2.style= "opacity: 0";
        },1200);
        const style2 = {opacity: 1};
        page_1.animate(style2, 1200);
        setTimeout(function(){
            page_1.style = "opacity: 1";
        },1200);
        this.style = "cursor: default";
        District1.style = "cursor: pointer";
        display = !display;
    }
})

