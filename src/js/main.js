// Mask for phone input
$(document).ready(function(){
    $('.phone-input').mask('+38 ( 099 ) 9999999')
})

$(document).ready(function () {
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
});