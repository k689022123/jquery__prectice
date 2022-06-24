$(document).ready(function () {
  //將目標以外的section進行隱藏
  $('main.container > section:not(#about)').hide();
  //效果同上$('main.container > section[id != "section_01"]').hide();

  $('.navbar > a').click(function () {
    //將main.container內全部的section進行隱藏
    $('main.container > section').hide();

    //將區塊href內的ID選擇器抽出,並顯示區塊
    $($(this).attr('href')).show();

    //刪除全部navbar底下a的active class
    $('.navbar > a.active').removeClass('active');

    //幫我們目前點擊的區塊加上active
    $(this).addClass('active');

    //讓原本的HTML操作不執行javascript
    return false;
  });

  $('.aside__menu').click(function () {
    $(this).toggleClass('active');
    $(this).next().toggleClass('active');
    $('.aside__mask').toggleClass('active');
  });

  $('.aside__mask').click(function () {
    $('.aside__menu').toggleClass('active');
    $('.aside__container').toggleClass('active');
    $(this).toggleClass('active');
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      $('.aside__go-top').addClass('active');
    } else {
      $('.aside__go-top').removeClass('active');
    }
  });

  $('.aside__go-top').click(function () {
    //返回到最頂上
    $('html').animate({ scrollTop: 0 }, 'slow');
  });

  $('.image-filter__button > button').click(function () {
    var target = $(this).attr('value');

    $('.image-filter__list > li').each(function () {
      if ($(this).hasClass(target) || target === 'all') {
        $(this).show();
        $(this).animate({ opacity: 0 }, 100);
        $(this).animate({ opacity: 1 }, 300);
      } else {
        $(this).hide();
        $(this).animate({ opacity: 0 }, 300);
      }
    });
  });

  $('.accordion-list > li > .answer').hide();

  $('.accordion-list > li > h3').click(function () {
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
      $(this).next().slideDown();
    } else {
      $(this).next().slideUp();
    }
  });
});
