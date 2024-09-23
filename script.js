const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function animatefirstpage(){
    var t1=gsap.timeline();
    t1.from("#nav",{
        y:"-10",
        opacity:0,
        duration:2,
        ease: Expo.easeInOut,
    })
}

function minicirclemove(){
    window.addEventListener("mousemove",(dets)=>{
        document.querySelector("#mincircle").style.transform=`translate(${dets.clientX}px,${dets.clientY}px)`;
    });
};
minicirclemove();
animatefirstpage()
