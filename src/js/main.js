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
        $('.popup-mail').css('display', 'block')
    })
    $('.close_icon').click(function(e){
        e.target.offsetParent.style.display = 'none'
    })
    $('.menu_icon').click(function(e){
        console.log('JI')
        $('.menu').css('display', 'block')
    })
    $('.call_me_back').click(function(e){
        $('.menu').css('display', 'none')
        $('.popup-phone').css('display', 'block')
    })
});