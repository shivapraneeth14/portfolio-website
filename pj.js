let side=document.querySelector(".ani");
let abt=document.getElementById("at");
let main=document.querySelector(".cont");
let close=document.querySelector(".cross-icon");
let choose=document.querySelector(".dot1");
let change=document.querySelector(".mid img");
let choose1=document.querySelector(".dot2");
let choose2=document.querySelector(".dot3");
let fdclose=document.querySelector(".close-icon");
let feed=document.querySelector(".fd");
let fdbtn=document.querySelector("#feedback");
let all=document.querySelectorAll(".ct");
let aniscroll=document.querySelector(".down-icon");
let blockhtml=document.querySelector(".html");
let blockcss=document.querySelector(".css");
let blockjs=document.querySelector(".js");
let htmlicon=document.querySelector(".html i");
let htmltext=document.querySelector(".h");
let csstext=document.querySelector(".c");
let cssicon=document.querySelector(".css i");
let jstext=document.querySelector(".j");
let jssicon=document.querySelector(".js i");
let git;
let crts=document.querySelectorAll("#al");
const gitlink="https://github.com/shivapraneeth14";
function newtab(){
    git.addEventListener("click",()=>{
        window.open(gitlink,"_blank");
    
    })
}

blockcss.addEventListener("mouseenter",()=>{
    addic();
    blockcss.appendChild(git);
    newtab();
    csstext.style.opacity="0.3";
    cssicon.style.opacity="0.3";

    console.log(blockcss);
})
blockcss.addEventListener("mouseleave",()=>{
    if (git) {
        git.remove();
    }
    csstext.style.opacity="1";
    cssicon.style.opacity="1";
})
blockjs.addEventListener("mouseenter",()=>{
    addic();
    blockjs.appendChild(git);
    newtab();
    console.log(blockjs);
    jstext.style.opacity="0.3";
    jssicon.style.opacity="0.3";

})
blockjs.addEventListener("mouseleave",()=>{
    if (git) {
        git.remove();
    }
    jstext.style.opacity="1";
    jssicon.style.opacity="1";
})

function addic(){
    crts.forEach(function(crt){
        git = document.createElement("div");
        let giticon = document.createElement("i");
        giticon.classList.add("fab", "fa-github", "fa-3x");
        git.classList.add("githtml");
        git.appendChild(giticon); 
    })
}
blockhtml.addEventListener("mouseenter",()=>{
    addic();
    blockhtml.appendChild(git);
    newtab();
    console.log(blockhtml);
    htmlicon.style.opacity="0.3";
    htmltext.style.opacity="0.3";
})
blockhtml.addEventListener("mouseleave",()=>{
    if (git) {
        git.remove();
    }
    htmlicon.style.opacity="1";
    htmltext.style.opacity="1";
})

function cl(){
    side.style.visibility = "hidden";
    main.style.opacity="1";
}

aniscroll.addEventListener("click",()=>{
    window.scrollBy(0, 600);
})

fdbtn.addEventListener("click",(e)=>{
    // feed.classList.toggle("fd-visible");
    feed.style.visibility = "visible";
    document.body.style.overflow = "hidden";
})
fdclose.addEventListener("click",()=>{
    // feed.classList.toggle("fd");
    feed.style.visibility = "hidden";
    document.body.style.overflow = "auto";
})

abt.addEventListener("click",()=>{
    console.log("checked");
    side.style.visibility = "visible";
    main.style.opacity="0.5";
})
choose2.addEventListener("click",()=>{
    change.src="cl.jpg";   
    main.style.background = "linear-gradient(to right, #ff4d00,#0437F2,#DC143C)";

})
choose1.addEventListener("click",()=>{
    change.src="as.jpg";
    main.style.background = "linear-gradient(to right, #28282B,#DCFFB7)";  

})
choose.addEventListener("click",()=>{
    change.src="colorful_stripes_lines_abstract_4k_8k_hd_abstract-7680x4320.jpg";
    main.style.background = "linear-gradient(to right, #CC5500,#2874A6 ,#00d2ff)";
})
close.addEventListener("click",()=>{
     cl();
})
