$(document).ready(function (){
    $('.slide-text h1').fadeOut(2000);
    $('.slide-text h1').fadeIn(2000);

    $(".head-moto-img").fadeTo('slow',0.05);
    $(".head-moto-img").fadeTo(7000,1);

    $('.head').slideUp(2000);
    $('.head').slideDown(1000);

    $('.blog-post').fadeOut(1500);
    $('.blog-time-post').slideUp(2000);
    $('.blog-time-post').slideDown(3000);
    $('.blog-post').fadeIn(6000);

    function zr(name_obj,t1,t2){
        obz=$(name_obj);
        t1=t1;
        t2=t2;
        obj.slideUp(t1)
        obj.slideDow,0.3(t2)
    }
zr('#my_form',2000,1000);

function prozor(name_obj, time, opacity){
    obz=$(name_obj);
        time=time;
        opacity=opacity;
        obj.slideUp(time);
        obj.slideDown(time);
        obj.fadeTo(time,1);
}
prozor('.slide-btn', 2000, 0.3);
})