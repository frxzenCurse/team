import {mediaQuery} from './mediaQueries'

// scroll
{
  $(() => {

    if (mediaQuery.matches) {
      const header = $('.header')
      const headeList = $('.header__list')
  
      const fps = 120
  
      let isScrolled = false
  
      $(window).one('scroll', scroll)
  
      function scroll() {
        update()
  
        setTimeout(() => {
          update()
  
          $(window).one('scroll', scroll)
        }, 1000 / fps)
      }
  
      function update() {
        let scrollTop = $(window).scrollTop()
  
        if (scrollTop > 1) {
          header.addClass('header--scroll')

          if (!isScrolled) {
            isScrolled = true
            headeList.slideUp(500)
          }
        } 
  
        if (scrollTop < 1) {
          header.removeClass('header--scroll')

          if (isScrolled) {
            isScrolled = false
            headeList.slideDown(500)
            $('[data-header-button]').removeClass('active')
            $('.header__template').slideUp(500)
          }
        }
      }
    }
  });
}

{
  $(() => {
    if (mediaQuery.matches) {
      const button = $('[data-header-button]')
      const headerAccordion = $('[data-header-accordion]')

      button.on('click', function() {
        $(this).toggleClass('active')
        headerAccordion.slideToggle(500)
      })
    }
  })
}