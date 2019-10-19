var radius = 18;
var circumference = 2 * radius * Math.PI;
console.log(circumference);
function getOffsetTop(element) {
    var distfromtop = 0;
    while(element) {
        distfromtop += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return distfromtop;
}
function setProgressIntro(percent) {
    if(percent>99.8) {
        percent = 100;
        $(".intro-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "85px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
    }
    else if(percent<-0.5) {
        $(".intro-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "85px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
        percent = 0;
    }
    else {

        $(".intro-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "red",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "85px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        }) 
    }
    var offset = circumference - percent / 100 * circumference;
    //console.log(offset);
    $(".progress-ring__circle-intro").css({
        "transition": "0s stroke-dashoffset",
        // axis compensation
        "transform": "rotate(-90deg)",
        "transform-origin": "50% 50%",
        "stroke-dasharray": `${circumference} ${circumference}`,
        "stroke-dashoffset": `${offset}`
    });

}
function setProgressEnviron(percent) {
    if(percent>99.8) {
        percent = 100;
        $(".environ-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "68px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
    }
    else if(percent<-0.5) {
        $(".environ-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "68px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
        percent = 0;
    }
    else {

        $(".environ-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "red",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "68px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        }) 
    }
    var offset = circumference - percent / 100 * circumference;
    //console.log(offset);
    $(".progress-ring__circle-environ").css({
        "transition": "0s stroke-dashoffset",
        // axis compensation
        "transform": "rotate(-90deg)",
        "transform-origin": "50% 50%",
        "stroke-dasharray": `${circumference} ${circumference}`,
        "stroke-dashoffset": `${offset}`
    });

}
function setProgressPHB(percent) {
    if(percent>99.8) {
        percent = 100;
        $(".phb-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "70px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
    }
    else if(percent<-0.5) {
        $(".phb-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "70px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
        percent = 0;
    }
    else {

        $(".phb-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "red",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "70px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        }) 
    }
    var offset = circumference - percent / 100 * circumference;
    //console.log(offset);
    $(".progress-ring__circle-phb").css({
        "transition": "0s stroke-dashoffset",
        // axis compensation
        "transform": "rotate(-90deg)",
        "transform-origin": "50% 50%",
        "stroke-dasharray": `${circumference} ${circumference}`,
        "stroke-dashoffset": `${offset}`
    });

}
function setProgressSolution(percent) {
    if(percent>99.8) {
        percent = 100;
        $(".solution-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "40px",
            "padding-right": "38px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
    }
    else if(percent<-0.5) {
        $(".solution-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "40px",
            "padding-right": "38px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
        percent = 0;
    }
    else {

        $(".solution-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "red",
            "padding-top": "20px",
            "padding-bottom": "40px",
            "padding-right": "38px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        }) 
    }
    var offset = circumference - percent / 100 * circumference;
    //console.log(offset);
    $(".progress-ring__circle-solution").css({
        "transition": "0s stroke-dashoffset",
        // axis compensation
        "transform": "rotate(-90deg)",
        "transform-origin": "50% 50%",
        "stroke-dasharray": `${circumference} ${circumference}`,
        "stroke-dashoffset": `${offset}`
    });

}
function setProgressTransfoam(percent) {
    if(percent>99.8) {
        percent = 100;
        $(".transfoam-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "70px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
    }
    else if(percent<-0.5) {
        $(".transfoam-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "grey",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "70px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        })
        percent = 0;
    }
    else {

        $(".transfoam-link").css({
            "font-family": "Trebuchet MS",
            "float": "left",
            "color": "red",
            "padding-top": "20px",
            "padding-bottom": "20px",
            "padding-right": "70px",
            "text-decoration": "none",
            "display": "block",
            "text-align": "left"
        }) 
    }
    var offset = circumference - percent / 100 * circumference;
    //console.log(offset);
    $(".progress-ring__circle-transfoam").css({
        "transition": "0s stroke-dashoffset",
        // axis compensation
        "transform": "rotate(-90deg)",
        "transform-origin": "50% 50%",
        "stroke-dasharray": `${circumference} ${circumference}`,
        "stroke-dashoffset": `${offset}`
    });

}
var getMax = function(){
        return $(document).height() - $(window).height();
}
$(document).ready(function(){
    
    
    //console.log(getMax);
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
    $('a[href^="#"]').on('click',function (e) {
        e.preventDefault();
        var target = this.hash,
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-90
        }, 1200)
    });
    $(".progress-ring__circle").css({
        "transition": "0.35s stroke-dashoffset",
        // axis compensation
        "transform": "rotate(-90deg)",
        "transform-origin": "50% 50%",
        "stroke-dasharray": `${circumference} ${circumference}`,
        "stroke-dashoffset": `${circumference}`
    });
    //console.log(document.getElementById("outreach-team").offsetTop); //this needs to be from TOP of page, but not working
});
//CIRCLE STUFF BELOW
$(document).scroll(function() {

    var introelement = document.querySelector('#intro');

    var environelement = document.querySelector('#environ');

    var phbelement = document.querySelector('#phb');

    var solutionelement = document.querySelector('#solution');

    var transfoamelement = document.querySelector('#transfoam');

    var outerelement = document.querySelector('#outer');
    //detect when user scroll to top and set position to absolute else sets position to fixed
    $(".fixed-index").css({
        "top": $(this).scrollTop() > 700 ? $(this).scrollTop() > getOffsetTop(outerelement)-700 ? getOffsetTop(outerelement)-550 : "150px" : "850px", //THESE MUST BE 600px APART
        "left": "0",
        "position": $(this).scrollTop() > 700 ? $(this).scrollTop() > getOffsetTop(outerelement)-700 ? "absolute" : "fixed" : "absolute"
    });
    //console.log($(this).scrollTop()-getOffsetTop(element));
    //console.log(100*($(this).scrollTop()-getOffsetTop(introelement)+90)/(getOffsetTop(environelement)-getOffsetTop(introelement)));
    //console.log($(this).scrollTop()); 
    //console.log(getOffsetTop(referenceselement));
    //console.log("next is this top");
    //console.log($(this).scrollTop());
    setProgressIntro(100*($(this).scrollTop()-getOffsetTop(introelement)+90)/(getOffsetTop(environelement)-getOffsetTop(introelement)));

    setProgressEnviron(100*($(this).scrollTop()-getOffsetTop(environelement)+90)/(getOffsetTop(phbelement)-getOffsetTop(environelement)));

    setProgressPHB(100*($(this).scrollTop()-getOffsetTop(phbelement)+90)/(getOffsetTop(solutionelement)-getOffsetTop(phbelement)));

    setProgressSolution(100*($(this).scrollTop()-getOffsetTop(solutionelement)+90)/(getOffsetTop(transfoamelement)-getOffsetTop(solutionelement)));

    setProgressTransfoam(100*($(this).scrollTop()-getOffsetTop(transfoam)+90)/(getOffsetTop(outerelement)-getOffsetTop(transfoamelement)));
    //setProgress(100*getOffsetTop($(this))/getMax()); //this doesn;t wrok
    //console.log("hi");
    //circle
    
});
$(window).on('resize', function(){
    var introelement = document.querySelector('#intro');

    var environelement = document.querySelector('#environ');

    var phbelement = document.querySelector('#phb');

    var solutionelement = document.querySelector('#solution');

    var transfoamelement = document.querySelector('#transfoam');
    var outerelement = document.querySelector('#outer');
    var wind = $(this)
    if(wind.width()<=1000) {
        $(".fixed-index").css({
            "display": "none"
        });
        $("#content").css({
            "padding-left": "0px"
        });
    }
    else {
        $(".fixed-index").css({
            "display": "block",
            "top": $(this).scrollTop() > 700 ? $(this).scrollTop() > getOffsetTop(outerelement)-650 ? "2533px" : "200px" : "900px", //THESE MUST BE 600px APART
            "left": "0",
            "position": $(this).scrollTop() > 700 ? $(this).scrollTop() > getOffsetTop(outerelement)-650 ? "absolute" : "fixed" : "absolute",

            "padding-left": "7%"
        });
        $("#content").css({
            "padding-left": "30%"
        });
    }
});

/*var circle = document.querySelector('cicle');
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;*/
/*$(".progress-ring__circle").css({
    "transition": "0.35s stroke-dashoffset",
    // axis compensation
    "transform": "rotate(-90deg)",
    "transform-origin": "50% 50%",
    "stroke-dasharray": "${circumference} ${circumference}",
    "stroke-dashoffset": "${circumference}"
});*/


/*position:fixed;
  left:0;
  top: 500px;*/