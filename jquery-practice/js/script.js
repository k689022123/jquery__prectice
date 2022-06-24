// wrapper 區塊顯示
$(function () {
  // 隱藏除了 id=introduction 以外的區塊
  $('.wrapper>section[id!="introduction"]').hide();

  $('.nav>a').click(function () {
    $('.wrapper>section').hide();

    $($(this).attr('href')).show();

    $('.active').removeClass('active');

    $(this).addClass('active');

    // 讓原本的 HTML 不執行 JavaScript
    return false;
  });
});

// Aside 展開顯示
$(function () {
  $('.aside__menu').click(function () {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
  });
});

// Aside go top 顯示
$(function () {
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('.aside__top').addClass('active');
    } else {
      $('.aside__top').removeClass('active');
    }
  });

  $('.aside__top').click(function () {
    $('html').animate({ scrollTop: 0 }, 'slow'); /* 返回到最頂上 */
    return false;
  });
});

// Tooltip 顯示
$(function () {
  $('.tooltip').hover(
    function () {
      $('body').append('<div id="tooltip"><p></p></div>');

      $('#tooltip p').html($(this).attr('alt'));

      $('#tooltip').hide();

      $('#tooltip').css(
        'top',
        $(this).offset().top - $('#tooltip').height() - 18,
      );

      $('#tooltip').css(
        'left',
        $(this).offset().left - ($('#tooltip').width() - $(this).width()) / 2,
      );

      $('#tooltip').stop().fadeIn();
    },
    function () {
      $('#tooltip').remove();
    },
  );
});

// Image filter 顯示
$(function () {
  $('.image-filter__button button').click(function () {
    var target = $(this).attr('value');
    console.log(target);

    $('.image-filter__list li').each(function () {
      $(this).animate({ opacity: 0 }, 300, function () {
        $(this).hide();
        if ($(this).hasClass(target) || target == 'all') {
          $(this).show();
          $(this).animate({ opacity: 1 }, 300);
        }
      });
    });
  });
});

// Accordion list 顯示
$(document).ready(function () {
  $('.accordion-list > li > .answer').hide();

  $('.accordion-list > li').click(function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active').find('.answer').slideUp();
    } else {
      $('.accordion-list > li.active .answer').slideUp();
      $('.accordion-list > li.active').removeClass('active');
      $(this).addClass('active').find('.answer').slideDown();
    }
    return false;
  });
});
