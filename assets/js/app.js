
$(function () {

    $('.bannar-slidar').slick({
        arrows: false,

        dots: true,
        dotsClass: 'bannar-slidar-dots'

    });

    $('.deals-clock').countdown('2024/12/20', function (event) {
        var $this = $(this).html(event.strftime(''
            + ' <div><span class="d-block">%D</span><span class="d-block">days</span>    </div>  '
            + ':'
            + '<div><span class="d-block">%H</span><span class="d-block">hours</span>    </div> '
            +':'
            + '<div><span class="d-block">%M</span><span class="d-block">menutes</span>   </div> '
            +':'
            + '<div><span class="d-block">%S</span><span class="d-block">seconds</span>    </div> '

        ));
    });
})



// let tooltipElement= document.querySelector('.jahid')
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))
//  new bootstrap.Tooltip(tooltipElement)




setTimeout(function(){
document.querySelector('#Newsletter ').style.transform='scale(1)'
},5000)

