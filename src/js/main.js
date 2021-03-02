// 
$(document).ready(function(){
    
})

$(document).ready(function () {
    // Mask for phone input
    $('.phone-input').mask('+38 ( 099 ) 9999999')

    // Counter listeners
    const burgerProductObj = {};
    const burgerProductArray = []
    let topHeight = 0;
    const objectSetting = {
        'Mayo': {
            y: -25 ,
            x: 45,
            addClassName: ''
        },
        'Bun': {
            y: -240,
            x: 10,
            addClassName: ''
        },
        'Cutlet': {
            y: -110,
            x: 50,
            addClassName: ''
        },
        'Tomato': {
            y: -50,
            x: 55,
            addClassName: ''
        },
        'Cheese': {
            y: -15,
            x: 0,
            addClassName: ''
        },
        'Salad': {
            y: -75,
            x: 0,
            addClassName: ''
        },
        'Onion': {
            y: -110,
            x: 60,
            addClassName: ''
        },
        'Cucumber': {
            y: -100,
            x: 30,
            addClassName: 'transform: rotate(-20deg) scale(.85)'
        },
    }
    function params(name){
        const x = objectSetting[name].x
        const y = objectSetting[name].y
        const addClassName = objectSetting[name].addClassName
        return [x , y, addClassName]
    }
    function createElement(name, x, y, addClassName=''){
        return `
        <div class="burger-form__item ${name.toLowerCase()} animate__animated animate__fadeIn" 
            style="position: absolute; top: ${y+topHeight}px;left: ${x}px;${addClassName}">
            <img src="img/burger-form/${name}.png" alt="">
        </div>
    `
    }
    function AddInfoProduct(name, prevCount){
        burgerProductObj[name] = Number(prevCount) + 1
        burgerProductArray.push(name)
        return true
    }
    $('.counter_plus').click(function(e){
        let prevCounter = e.target.previousElementSibling.innerHTML
        let name = e.target.parentElement.previousElementSibling.innerHTML
        AddInfoProduct(name, prevCounter)
        const [x,y,addClassName] = params(name)
        const newElement = createElement(name, x , y, addClassName)
        topHeight+= y
        $('.burger-form-creator').append(newElement)
        e.target.previousElementSibling.innerHTML = Number(prevCounter) + 1
        console.log(name)
        if (name === 'Bun'){
            $('.slider-card__counter .counter_plus').attr("disabled", true);
        }
    })
    $('.counter_minus').click(function(e){
        let prevCounter = e.target.nextElementSibling.innerHTML
        let name = e.target.parentElement.previousElementSibling.innerHTML
        
        if(prevCounter != 0){
            const array = $(`.${name.toLowerCase()}`)
            console.log(array)
            const len = array.length
            const [,y] = params(name)
            topHeight = topHeight + Math.abs(y)
            $(`.${name.toLowerCase()}`)[len-1].remove()
            e.target.nextElementSibling.innerHTML = Number(prevCounter) - 1
        }
        if (name === 'Bun'){
            $('.slider-card__counter .counter_plus').attr("disabled", false);
        }
    })

    // Button listeners
    $('.order').click(function(){
        $('.popup-order').show()
    })
    $('.popup-order-ok').click(function(){
        $('.popum-mail').removeClass('animate__fadeIn')
        $('.popum-mail').addClass('animate__fadeOut')

        $('.popup-order').hide()
    })
    $('.close_icon-order').click(function(){
        $('.popum-mail').removeClass('animate__fadeIn')
        $('.popum-mail').addClass('animate__fadeOut')
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