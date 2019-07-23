function getOffsetTop(element) {
    var distfromtop = 0;
    while(element) {
        distfromtop += (element.offsetTop - element.scrollTop + element.clientTop);
        element = element.offsetParent;
    }

    return distfromtop;
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
    //console.log(document.getElementById("outreach-team").offsetTop); //this needs to be from TOP of page, but not working
});
//CIRCLE STUFF BELOW
$(document).scroll(function() {
    
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