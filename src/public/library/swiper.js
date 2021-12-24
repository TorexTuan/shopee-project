
window.onload = function() {
    // product header title
    var $ = document.querySelector.bind(document)
   
    var productsTitle = $(".products__header__title")
    var productsLink = $(".products__header__link")
   
    function activeLineLink() {
        $(".products-line-title.products-line-active").classList.remove("products-line-active")
        $(".recommend-products.active-products").classList.remove("active-products")
   
        $(".products-line-image").classList.add("products-line-active")
        $(".october-products").classList.add("active-products")
    }
   
    function activeLineTitle() {
        $(".products-line-image.products-line-active").classList.remove("products-line-active")
        $(".october-products.active-products").classList.remove("active-products")
   
        $(".products-line-title").classList.add("products-line-active")
        $(".recommend-products").classList.add("active-products")
    }
   
    productsLink.addEventListener('click', activeLineLink)
    productsTitle.addEventListener('click', activeLineTitle)
    // pop up
    var overlay = document.querySelector(".shopee__overlay")
    var closeIcon =  document.querySelector(".shopee__popup__close")
   
    function closePopUp() {
        overlay.classList.add("hidden-popup")
    }
   
    overlay.addEventListener('click', closePopUp)
    closeIcon.addEventListener('click', closePopUp)
   
    // body1__banner-motion 
    var swiper1 = new Swiper(".mySwiper1", {
        spaceBetween: 10,
        noSwiping: true,
        noSwipingClass: ".body1__banner-motion__link",
        loop: true,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination-motion",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next-motion",
            prevEl: ".swiper-button-prev-motion"
        }   
    });
    // body2__mall__content__left
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 2,
        noSwiping: true,
        noSwipingClass: ".body2__mall__left__link",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination-motion",
            clickable: true
        },
        navigation: {
            nextEl: ".swiper-button-next-motion",
            prevEl: ".swiper-button-prev-motion"
        },
        loop: true   
    });
   
    // body2__catalog__typeProducts
    var nextButtonNavigation = document.querySelectorAll('.swiper-button-next-navigation')
    var prevButtonNavigation = document.querySelectorAll('.swiper-button-prev-navigation')
    var body2TypeProducts = document.querySelector('.body2__catalog__typeProducts')
   
    var swiperCatalog = new Swiper(".mySwiper-catalog", {
        slidesPerView: 10,
        noSwiping: true,
        noSwipingClass: ".body2__catalog__typeProducts-two",
        navigation: {
            nextEl: nextButtonNavigation[0],
            prevEl: prevButtonNavigation[0],
        },
    });
   
    nextButtonNavigation[0].addEventListener("click", nextSlideCatalog)
    prevButtonNavigation[0].addEventListener("click", preSlideCatalog)
    
   
    function nextSlideCatalog() {   
        var transformCatalog = 'translate3d( 0px, 0px, 0px)'
        body2TypeProducts.style.transform = transformCatalog.replace('0px', '-360px')
        nextButtonNavigation[0].style.visibility = "hidden";
        prevButtonNavigation[0].style.visibility = "visible";
    }
   
    function preSlideCatalog() {
        prevButtonNavigation[0].style.visibility = "hidden";
        nextButtonNavigation[0].style.visibility = "visible";
    }
   
    // flash sale
    var body2FlashContent = document.querySelector('.body2__flashSale__content')
   
    var swiperCatalog = new Swiper(".mySwiper-flash", {
        slidesPerView: 6,
        noSwiping: true,
        noSwipingClass: ".body2__flashSale__content-product",
        navigation: {
            nextEl: nextButtonNavigation[1],
            prevEl: prevButtonNavigation[1],
        },  
    });
   
    nextButtonNavigation[1].addEventListener("click", nextSlideFlash)
    prevButtonNavigation[1].addEventListener("click", preSlideFlash)
    
    var flash = 0;
    function nextSlideFlash() {  
        if(flash <= 0 && flash >= -1000) {
            flash -= 1000;
            var transformFlash = 'translate3d( 0px, 0px, 0px)'
            body2FlashContent.style.transform = transformFlash.replace('0px', `${flash}px`)
            prevButtonNavigation[1].style.visibility = "visible"
            if(flash < -1000) {
                nextButtonNavigation[1].style.visibility = "hidden";
            }
        }
        
    }
   
    function preSlideFlash() {
        if(flash < 0) {
            flash += 1000;
            var transformFlash = 'translate3d( 0px, 0px, 0px)'
            body2FlashContent.style.transform = transformFlash.replace('0px', `${flash}px`)
            nextButtonNavigation[1].style.visibility = "visible";
            if(flash === 0) {
                prevButtonNavigation[1].style.visibility = "hidden"
            }
        }
    }
   
    // mall - right
    var body2Mallright = document.querySelector('.body2__mall__content__right')
   
    var swiperMallRight = new Swiper(".mySwiper-mallRight", {
        slidesPerView: 4,
        noSwiping: true,
        noSwipingClass: ".body2__mall__right__2products",
        navigation: {
            nextEl: nextButtonNavigation[2],
            prevEl: prevButtonNavigation[2],
        },
    });
    
    nextButtonNavigation[2].addEventListener("click", nextSlideMallRight)
    prevButtonNavigation[2].addEventListener("click", preSlideMallRight)
   
    var mallRight = 0
    function nextSlideMallRight() {  
        if(mallRight <= 0 && mallRight >= -800) {
            mallRight -= 800;
            var transformMallRight = 'translate3d( 0px, 0px, 0px)'
           body2Mallright.style.transform = transformMallRight.replace('0px', `${mallRight}px`)
            prevButtonNavigation[2].style.visibility = "visible"
            if(mallRight < -800) {
                nextButtonNavigation[2].style.visibility = "hidden";
            }
        }
    }
   
    function preSlideMallRight() {
        if(mallRight < 0) {
            mallRight += 800;
            var transformMallRight = 'translate3d( 0px, 0px, 0px)'
           body2Mallright.style.transform = transformMallRight.replace('0px', `${mallRight}px`)
            nextButtonNavigation[2].style.visibility = "visible";
            if(mallRight === 0) {
                prevButtonNavigation[2].style.visibility = "hidden"
            }
        }
    }
   
    // top search
    
    var body2TopSearch = document.querySelector('.body2__topSearch__content-products')
   
    var swiperTopSearch = new Swiper(".mySwiper-topSearch", {
        slidesPerView: 6,
        noSwiping: true,
        noSwipingClass: ".body2__topSearch__content__topProduct",
        navigation: {
            nextEl: nextButtonNavigation[3],
            prevEl: prevButtonNavigation[3],
        },
    });
    
    nextButtonNavigation[3].addEventListener("click", nextSlideTopSearch)
    prevButtonNavigation[3].addEventListener("click", preSlideTopSearch)
   
    var topSearch = 0
    function nextSlideTopSearch() {  
        if(topSearch <= 0 && topSearch >= -2400) {
            topSearch -= 1200;
            var transformTopSearch = 'translate3d( 0px, 0px, 0px)'
            body2TopSearch.style.transform = transformTopSearch.replace('0px', `${topSearch}px`)
            prevButtonNavigation[3].style.visibility = "visible"
            if(topSearch < -2400) {
                nextButtonNavigation[3].style.visibility = "hidden";
            }
        }
    }
   
    function preSlideTopSearch() {
        if(topSearch < 0) {
            topSearch += 1200;
            var transformTopSearch = 'translate3d( 0px, 0px, 0px)'
           body2TopSearch.style.transform = transformTopSearch.replace('0px', `${topSearch}px`)
            nextButtonNavigation[3].style.visibility = "visible";
            if(topSearch === 0) {
                prevButtonNavigation[3].style.visibility = "hidden"
            }
        }
    }

}