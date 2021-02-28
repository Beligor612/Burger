// 
$(document).ready(function(){
    
})

$(document).ready(function () {
    // Mask for phone input
    $('.phone-input').mask('+38 ( 099 ) 9999999')

    // Counter listeners
    $('.counter_plus').click(function(e){
        let prevCounter = e.target.previousElementSibling.innerHTML
        e.target.previousElementSibling.innerHTML = Number(prevCounter) + 1
    })
    $('.counter_minus').click(function(e){
        let prevCounter = e.target.nextElementSibling.innerHTML
        if(prevCounter != 0){
            e.target.nextElementSibling.innerHTML = Number(prevCounter) - 1
        }
    })
    // Button listeners
    $('.order').click(function(){
        $('.popup-order').show()
    })
    $('.popup-order-ok').click(function(){
        $('.popup-order').hide()
    })
    $('.close_icon-order').click(function(){
        $('.popup-order').hide()
        
    })
    $('.close_icon_phone').click(function(){
        $('.popup-call_me').hide()
    })
    $('.menu_icon').click(function(){
        console.log('JI')
        $('.menu').css('display', 'block')
    })
    $('.call_me_back').click(function(){
        $('.menu').css('display', 'none')
        $('.popup-call_me').css('display', 'block')
    })
    $('.popup-phone-ok').click(function(){
        $('.popup-call_me').hide()
    })
    $('.make-burger').click(function(){
        var scrollDiv = document.getElementById("burger-form").offsetTop;
        window.scrollTo({ top: scrollDiv, behavior: 'smooth'});
    })
});

var scene = document.getElementById('scene');
var parallaxInstance = new Parallax(scene);