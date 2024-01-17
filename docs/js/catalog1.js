// слайды Типы лестниц
const swiper = new Swiper('.typesStairs__swiper', {
    slidesPerView: 1,
    loop:true,
    spaceBetween: 25,

    // Navigation arrows
    navigation: {
        nextEl: '.typesStairs__btn-next',
        prevEl: '.typesStairs__btn-prev',
    },

    pagination: {
        el: '.typesStairs__swiper-pagination',
        clickable: true,

    },

    breakpoints: {
        576: {
            slidesPerView: 2,
            
        },

        

        992:{
            slidesPerView: 3,
            
        }
        
    }
});