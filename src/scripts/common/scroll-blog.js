let scrollMenu = (function(){
  const $news = $('.blog-content__article');
  const $item = $('.list-article__art');
  const $wrapMenu = $('.wrap__list-article');
  let positionArticle = [];
  let offsetHeight = 0; // верхнее смещение для скролла
  let flagAnimation = true;

  // выполняем расчет позиций для каждой статьи
  const _setPositionArticle = function(elements) {
    elements.each(function(item) {
      positionArticle[item] = {}
      positionArticle[item].top = $(this).offset().top - offsetHeight
      positionArticle[item].bottom = positionArticle[item].top + $(this).innerHeight()
    })
  }

  const _scrollPageFixMenu = function(e) {
    let scroll = window.pageYOffset;
    if (scroll < $news.offset().top) {
      $wrapMenu.removeClass('fixed')
    } else {
      $wrapMenu.addClass('fixed')
    }
  }

  const _scrollPage = function(e) {
    const isFirstVision = function(element, current) {
      let scroll = window.pageYOffset;
      return scroll >= element.top && scroll < element.bottom && !current.hasClass('list-article__artactiv')
    }
    positionArticle.forEach((element, index) => {
      let $currentElement = $item.eq(index);
      if (isFirstVision(element, $currentElement)) {
        $currentElement.addClass('list-article__artactiv').siblings().removeClass('list-article__artactiv')
      }
    })
  }

  const _clickMenu = function(e) {
    if (flagAnimation) {
      flagAnimation = false;
      let $element = $(e.target)
      let index = $element.index()
      let sectionOffset = Math.ceil(positionArticle[index].top)
      $(document).off('scroll', _scrollPage)
      $element.siblings().removeClass('list-article__artactiv')

      $('body, html').animate({scrollTop: sectionOffset}, 1000, () => {
        $element.addClass('list-article__artactiv')
        $(document).on('scroll', _scrollPage)
        flagAnimation = true;
      })
      
    }
  }

  const addListener = function() {
    $(window).one('load', function(e) {
      _setPositionArticle($news)
      $('.menu').on('click', _clickMenu)
      $(document).on('scroll', _scrollPage)
      $(document).on('scroll', _scrollPageFixMenu)
    })

    $(window).on('resize', function(e) {
      _setPositionArticle($news)
    })
  }

  return {
    init: addListener
  }

})()


module.exports = scrollMenu;

