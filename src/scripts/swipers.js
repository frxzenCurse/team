import Swiper from 'swiper/bundle';

const BREAKPOINT = 1280;
const BREAKPOINT_MOBILE = 768

// swiper 
{
  $(window).on('load', () => { // ?
    const slider = $('[data-slider-id]');

    if (slider.length !== 0) {
      slider.each(function () {
        const slider_el = $(this);
        const slider_id = slider_el.data('slider-id');
        const slider_prev_id = slider_el.data('slider-prev');
        const slider_next_id = slider_el.data('slider-next');
        const slider_prev = $(`[data-slider-button="${slider_prev_id}"]`);
        const slider_next = $(`[data-slider-button="${slider_next_id}"]`);

        let slider_options = {
          slidesPerView: 1,
          on: {
            init: function () {
              $('.slider__length').text(this.slides.length)
            },
            slideChange: function(event) {
              $('.slider__current').text(event.realIndex + 1)
            }
          },
        };

        switch (slider_id) {
          case 10:
            slider_options = {
              // ...slider_options,

              breakpoints: {
                // [BREAKPOINT]: {
                //   spaceBetween: 60,
                // },
              },
            }
            break;
        }

        const slider_swiper = new Swiper(slider_el[0], slider_options);

        slider_prev.on('click', () => {
          slider_swiper.slidePrev();
        });
        slider_next.on('click', () => {
          slider_swiper.slideNext();
        });
      });
    }
  });
}
