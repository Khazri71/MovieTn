
//Jequery 
//Smooth Scrolling and remove #

$("#navbar header-content main-navbar li a").on("click" , function(event){
    if(this.hash !== ""){
        event.preventDefault();

        const hash = this.hash;

        $("html , body").animate({scrollTop : $(hash).offset().top - 74} , 700);
    }
}); 